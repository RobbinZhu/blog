const names = [
    'account',
    'article',
    'banner',
    'comment',
    'content',
    'github',
    'mail',
    'menu',
    'resource',
    'role',
    'social',
    'tag',
    'topic',
    'roles_menus',
    'roles_resources',
    'accounts_roles'
]
const api = {
    admin: {
        login: function(account) {
            return api.post('/portal/admin_login', account)
        }
    }
}

names.forEach(function(name) {
    api[name] = {
        create(data) {
            return api.post('/service/' + name, data)
        },
        getById(id) {
            return api.get('/service/' + name + '/' + id)
        },
        list(page, data) {
            return api.post('/service/' + name + '/list/' + page, data)
        },
        all(data) {
            return api.post('/service/' + name + '/all', data)
        },
        findOne(data) {
            return api.post('/service/' + name + '/findOne', data)
        },
        update(id, data) {
            return api.post('/service/' + name + '/' + id, data)
        },
        remove(data) {}
    }
})

api.role.setMenus = function(id, menu_ids) {
    return api.post('/service/role_menu', {
        id,
        menu_ids
    })
}

api.role.setResources = function(id, resource_ids) {
    return api.post('/service/role_resource', {
        id,
        resource_ids
    })
}

api.account.setRoles = function(id, role_ids) {
    return api.post('/service/account_role', {
        id,
        role_ids
    })
}

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
const vue = new Vue

const loginError = debounce(function() {
    if (location.pathname == '/portal/login') {
        return
    }
    vue.$message.error('请先<a href="/portal/login">登录</a>', 30000)
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
                    resolve(JSON.parse(this.responseText).result)
                } else {
                    errorHandler(this)
                }
            }
        }
        xhr.open(method, url, true)
        xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8")
        xhr.send(data ? JSON.stringify(data) : null)
    })
}

function errorHandler(xhr) {
    switch (xhr.status) {
        case 401:
            loginError()
            break
        case 403:
            noPermissionError()
            break
        case 404:
            break
        default:
            vue.$message.error(JSON.parse(xhr.responseText).result, 30000)
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