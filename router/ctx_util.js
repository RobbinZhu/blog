const Context = require('fast_tcp_server').http_context

function json(obj, status) {
    return {
        isSuccess: true,
        result: obj,
        status: status || 200
    }
}

function fail(obj) {
    return {
        isSuccess: false,
        result: obj
    }
}

function isXHRRequest(headers) {
    return (headers['content-type'] || '').toString().indexOf('application/json') > -1
}

Context.prototype.error = function(msg, statusCode) {
    this.setStatus(statusCode)
    this.body = isXHRRequest(this.reqHeader) ? json(msg) : msg
}

Context.prototype.redirect = function(location, body, statusCode) {
    if (isXHRRequest(this.reqHeader)) {
        this.body = {
            isSuccess: false,
            status: statusCode || 302,
            result: location || '/'
        }
    } else {
        this.setStatus(statusCode || 302)
        this.body = body
        this.setResponseHeader('Location', location || '/')
    }
}

Context.prototype.json = function(body) {
    this.body = json(body)
}

Context.prototype.fail = function(body) {
    this.body = fail(body)
}
module.exports = {}