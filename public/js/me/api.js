const api = {}
const vue = new Vue

function debounce(fn, idle) {
    let timeout
    return function() {
        const ctx = this,
            args = arguments
        clearTimeout(timeout)
        timeout = setTimeout(function() {
            fn.apply(ctx, args)
        }, idle)
    }
}

const loginError = debounce(function() {
    vue.$message.error('请先<a href="/login">登录</a>', 30000)
}, 300)
const noPermissionError = debounce(function() {
    vue.$message.error('您无访问该资源的权限', 30000)
}, 300)

function ajax(url, method, data) {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest
        xhr.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    const json = JSON.parse(this.responseText)
                    if (json.isSuccess) {
                        resolve(json.result)
                    } else {
                        errorHandler(json.status, json)
                    }
                } else {
                    errorHandler(this.status)
                }
            }
        }
        xhr.open(method, url, true)
        xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8")
        xhr.send(data ? JSON.stringify(data) : null)
    })
}

function errorHandler(status, json) {
    switch (status) {
        case 401:
            loginError()
            break
        case 403:
            noPermissionError()
            break
        case 404:
            break
        case 302:
        case 301:
            location.href = json.result || '/'
            break
        default:
            // vue.$message.error(e, 30000)
            break
    }
}

api.post = function(url, data) {
    return ajax(url, 'POST', data)
}

api.get = function(url) {
    return ajax(url, 'GET')
}

api.delete = function(url) {
    return ajax(url, 'DELETE')
}

Vue.prototype.$api = api
export default api