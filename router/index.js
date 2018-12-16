const Router = require('fast_tcp_server').router
const loginUtil = require('./login_util')
const CtxUtil = require('./ctx_util')

module.exports = new Router()
    .get('/', require('./frontend').list)
    .get('/account/:id', require('./frontend').account)
    .get('/article/:id', require('./frontend').article)
    .get('/login', async function(ctx) {
        ctx.redirect('/github', 'Login with github', 301)
    })
    .get('/logout', loginUtil.logout)
    .post('/admin_login', loginUtil.loginAdmin)
    .use('/github', require('./github'))
    .use('/me', require('./me'))
    .use('/service', require('./service'))
    .use('/bind_social', require('./bind_social'))
    .get('/writer', loginUtil.pageFilterAccount, async function(ctx) {
        await ctx.render('layout/writer')
    })
    .get('/portal', async function(ctx) {
        ctx.redirect('/portal/', 'Goto portal page', 301)
    })
    .use('/portal', require('./portal'))
    .router()