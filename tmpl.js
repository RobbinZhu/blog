const tmpl = require('i-template')
const Context = require('fast_tcp_server').http_context
const config = require('./config')
const viewsBase = require('path').resolve('views')
tmpl._cache = ('dev' !== (process.env.NODE_ENV || 'dev'))
tmpl._nowith = true

Context.prototype.render = async function(view) {
    const options = this.locals
    options.settings = {
        views: viewsBase
    }
    options._version = config._version
    this.body = await new Promise((resolve, reject) => {
        tmpl.__express(viewsBase + '/' + view + '.html', options, function(e, body) {
            if (e) {
                reject(e)
            } else {
                resolve(body)
            }
        })
    })
}
module.exports = async function(ctx, next) {
    await next()
}