const https = require('https')
const Router = require('fast_tcp_server').router
const config = require('../config')
const Model = require('../sequelize/model')
const LoginUtil = require('./login_util')

const github = config.github

function queryFromGithub(host, path) {
    return new Promise(function(resolve, reject) {
        const data = [],
            options = {
                hostname: host,
                port: 443,
                path: path,
                method: 'GET',
                headers: {
                    'User-Agent': 'Robbin'
                }
            }
        const req = https.get(options, function(res) {
            res
                .on('data', function(d) {
                    data.push(d)
                })
                .on('end', function() {
                    resolve(Buffer.concat(data).toString())
                })
        })
        req.on('error', function(e) {
            resolve('')
        })
    })
}


const router = new Router
router
    .get('/', async function(ctx) {
        ctx.error('goto github page', 302)
        ctx.setResponseHeader('Location', 'https://github.com/login/oauth/authorize?client_id=' + github.client_id + '&scope=user,public_repo')
    })
    .get('/callback', async function(ctx) {
        const code = (ctx.reqQuery.code || '').toString().trim()
        if (!code.length) {
            ctx.error('Not Allow to access', 401)
            return
        }
        const access_str = await queryFromGithub('github.com', '/login/oauth/access_token?client_id=' + github.client_id + '&client_secret=' + github.client_secret + '&code=' + code)
        if (!access_str.length) {
            ctx.error('error callback from github', 401)
            return
        }
        const map = {}
        const params = access_str.split('&').map(function(pair) {
            const param = pair.split('=')
            map[param[0]] = param[1]
        })

        if (!map['access_token']) {
            ctx.error('error access_token from github', 302)
            ctx.setResponseHeader('Location', '/github')
            return
        }
        const git_user_str = await queryFromGithub('api.github.com', '/user?access_token=' + map['access_token'])
        if (!git_user_str.length) {
            ctx.error('error to get user info from github', 401)
            return
        }
        const git_user = JSON.parse(git_user_str)
        let github_info = await Model.github.findOne({
            where: {
                id: git_user.id
            }
        })

        if (!github_info) {
            github_info = await Model.github.create({
                id: git_user.id,
                content: git_user_str
            })
        }

        let social = await Model.social.findOne({
            where: {
                type: 'github',
                profile_id: github_info.id
            }
        })

        if (!social) {
            social = await Model.social.create({
                type: 'github',
                profile_id: github_info.id
            })
        }
        if (!social || !social.id) {
            ctx.error('error to get user from db', 401)
            return
        }
        let account = await Model.account.findOne({
            where: {
                social_id: social.id
            }
        })
        if (!account) {
            account = await Model.account.create({
                name: 'github_' + git_user.email.split('').filter(function(char) {
                    const charCode = char.charCodeAt(0)
                    return (48 <= charCode && charCode <= 57) || //0-9
                        (65 <= charCode && charCode <= 90) || //A-Z
                        (97 <= charCode && charCode <= 122) || //a-z
                        (charCode == 95) //_
                }).join(''),
                email: git_user.email ? (Math.random().toString().slice(2, 5) + git_user.email) : ('github_' + git_user.id + '@github.local'),
                password: git_user.email,
                avatar: git_user.avatar_url + '&s=150',
                social_id: social.id,
                active: true,
            })
        }
        if (!account.active) {
            ctx.error('account is disabled', 401)
            return
        }

        LoginUtil.login(account.id, LoginUtil.getRedirectFromCookie(ctx), ctx)
        LoginUtil.addCookie(ctx, 'redirect', '', { path: '/' })
        ctx.body = account
    })
module.exports = router