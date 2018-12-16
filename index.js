const TCPServer = require('fast_tcp_server')
const precheck = require('./precheck')
const config = require('./config')

async function main() {
    await precheck()
    new TCPServer.server()
        .use(async function(ctx, next) {
            ctx.locals.site = config.site
            ctx.locals._version = config._version
            try {
                await next()
            } catch (e) {
                console.error(e)
                ctx.error(e, 500)
                return
            }
            if (ctx.body === undefined) {
                ctx.error('Not found', 404)
            }
        })
        .use(TCPServer.static(config.static || {
            root: '/public',
            maxage: 3600 * 24 * 365,
            next: true,
            acceptRange: true,
            maxPartialBlock: 1024 * 1024
        }))
        .use(require('./tmpl'))
        .use(require('./router'))
        .listen(config.port)
    console.log('server start at', new Date)
}

main()