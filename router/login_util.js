const url = require('url'),
    crypto = require('crypto'),
    Cookie = require('fast_tcp_server').cookie,
    cookieConfig = require('../config').cookie,
    uuid = require('../util/uuid'),
    tokenRegex = new RegExp('(?:^|;) *' + cookieConfig.key + '=([^;]*)'),
    adminTokenRegex = new RegExp('(?:^|;) *admin_' + cookieConfig.key + '=([^;]*)'),
    redirectRegex = new RegExp('(?:^|;) *redirect=([^;]*)')

function getFromCookie(cookie, regex) {
    cookie = cookie && cookie.match(regex)
    cookie = cookie ? cookie[1] : null
    return cookie
}

const onlineAccount = new Map
const onlineAdminAccount = new Map

function addCookie(ctx, key, value, config) {
    const cookieSet = ctx.getResponseHeader('set-cookie') || new Cookie
    cookieSet.add(key, value, config)
    ctx.setResponseHeader('set-cookie', cookieSet)
}

module.exports = {
    login: function(account_id, redirect, ctx) {
        const cookie_id = crypto.createHmac('sha1', cookieConfig.secret).update(uuid()).digest('hex')
        onlineAccount.set(cookie_id, account_id)
        ctx.redirect(redirect || '/', 'Redirect to homepage')
        addCookie(ctx, cookieConfig.key, cookie_id, cookieConfig)
    },
    loginAdmin: function(account_id, ctx) {
        const cookie_id = crypto.createHmac('sha1', cookieConfig.secret).update(uuid()).digest('hex')
        onlineAdminAccount.set(cookie_id, account_id)
        addCookie(ctx, 'admin_' + cookieConfig.key, cookie_id, cookieConfig)
    },
    addCookie: addCookie,
    logout: async function(ctx, next) {
        const token = getFromCookie(ctx.reqHeader.cookie, tokenRegex)
        if (!token) {
            ctx.error('Please login')
            return
        }
        onlineAccount.delete(token)

        addCookie(ctx, cookieConfig.key, '', cookieConfig)

        ctx.redirect('/', 'Redirect to homepage')
    },
    getTokenFromCookie: function(ctx) {
        return getFromCookie(ctx.reqHeader.cookie, tokenRegex)
    },
    getRedirectFromCookie: function(ctx) {
        return getFromCookie(ctx.reqHeader.cookie, redirectRegex)
    },
    getAccountIdWithToken: function(token) {
        return onlineAccount.get(token)
    },
    filterAccount: async function(ctx, next) {
        const token = getFromCookie(ctx.reqHeader.cookie, tokenRegex)
        if (!token) {
            ctx.error('Please login', 401)
            return
        }
        const account_id = onlineAccount.get(token)
        if (!account_id) {
            ctx.error('Please login', 401)
            return
        }
        if (account_id < 0) {
            ctx.locals.social_id = account_id
            ctx.error('Bind social account first', 401)
            return
        }
        ctx.locals.account_id = account_id
        await next()
    },
    pageFilterAccount: async function(ctx, next) {
        const token = getFromCookie(ctx.reqHeader.cookie, tokenRegex)

        addCookie(ctx, 'redirect', ctx.url, { path: '/' })
        if (!token) {
            ctx.redirect('/login', 'Please login')
            return
        }
        const account_id = onlineAccount.get(token)
        if (!account_id) {
            ctx.redirect('/login', 'Please login')
            return
        }
        if (account_id < 0) {
            ctx.locals.social_id = account_id
            ctx.redirect('/bind_social', 'Bind social account first')
            return
        }
        ctx.locals.account_id = account_id

        await next()
    },
    getAdminId: function(ctx) {
        const token = getFromCookie(ctx.reqHeader.cookie, adminTokenRegex)
        return onlineAdminAccount.get(token)
    },
    filterAdminAccount: async function(ctx, next) {
        const token = getFromCookie(ctx.reqHeader.cookie, adminTokenRegex)
        const account_id = onlineAdminAccount.get(token)
        if (!account_id) {
            ctx.error('please login first', 401)
            return
        }
        ctx.locals.admin_id = account_id
        await next()
    }
}