const config = require('./config')
const Model = require('./sequelize/model')

const resourceList = [{
    "method": "GET",
    "name": "控制台首页",
    "url": "/"
}, {
    "method": "GET",
    "name": "账号管理-账号列表",
    "url": "/account"
}, {
    "method": "GET",
    "name": "账号管理-创建账号",
    "url": "/account/create"
}, {
    "method": "POST",
    "name": "账号管理-创建账号",
    "url": "/account"
}, {
    "method": "GET",
    "name": "账号管理-编辑账号",
    "url": "/account/edit/.+"
}, {
    "method": "POST",
    "name": "账号管理-编辑账号",
    "url": "/account/edit/.+"
}, {
    "method": "POST",
    "name": "账号管理-删除账号",
    "url": "/account/delete/.+"
}, {
    "method": "POST",
    "name": "账号管理-禁用账号",
    "url": "/account/disable/.+"
}, {
    "method": "POST",
    "name": "账号管理-启用账号",
    "url": "/account/enable/.+"
}, {
    "method": "GET",
    "name": "账号管理-角色列表",
    "url": "/account/role/.+"
}, {
    "method": "POST",
    "name": "账号管理-分配角色",
    "url": "/account/role"
}, {
    "method": "GET",
    "name": "角色管理-角色列表",
    "url": "/role"
}, {
    "method": "GET",
    "name": "角色管理-创建角色",
    "url": "/role/create"
}, {
    "method": "POST",
    "name": "角色管理-创建角色",
    "url": "/role"
}, {
    "method": "GET",
    "name": "角色管理-编辑角色",
    "url": "/role/edit/.+"
}, {
    "method": "POST",
    "name": "角色管理-编辑角色",
    "url": "/role/edit/.+"
}, {
    "method": "GET",
    "name": "角色管理-权限列表",
    "url": "/role/assign_role/.+"
}, {
    "method": "POST",
    "name": "角色管理-分配权限",
    "url": "/role/assign_role"
}, {
    "method": "GET",
    "name": "角色管理-菜单列表",
    "url": "/role/assign_menu/.+"
}, {
    "method": "POST",
    "name": "角色管理-分配菜单",
    "url": "/role/assign_menu"
}, {
    "method": "POST",
    "name": "角色管理-删除角色",
    "url": "/role/delete/.+"
}, {
    "method": "GET",
    "name": "资源管理-资源列表",
    "url": "/resource"
}, {
    "method": "GET",
    "name": "资源管理-创建资源",
    "url": "/resource/create"
}, {
    "method": "POST",
    "name": "资源管理-创建资源",
    "url": "/resource"
}, {
    "method": "GET",
    "name": "资源管理-编辑资源",
    "url": "/resource/edit/.+"
}, {
    "method": "POST",
    "name": "资源管理-编辑资源",
    "url": "/resource/edit/.+"
}, {
    "method": "POST",
    "name": "资源管理-删除资源",
    "url": "/resource/delete/.+"
}, {
    "method": "GET",
    "name": "标签管理-标签列表",
    "url": "/tag"
}, {
    "method": "GET",
    "name": "标签管理-创建标签",
    "url": "/tag/create"
}, {
    "method": "POST",
    "name": "标签管理-创建标签",
    "url": "/tag"
}, {
    "method": "GET",
    "name": "常用标签",
    "url": "/tag/more"
}, {
    "method": "GET",
    "name": "标签管理-编辑标签",
    "url": "/tag/edit/.+"
}, {
    "method": "POST",
    "name": "标签管理-编辑标签",
    "url": "/tag/edit/.+"
}, {
    "method": "POST",
    "name": "标签管理-删除标签",
    "url": "/tag/delete/.+"
}, {
    "method": "GET",
    "name": "主题管理-主题列表",
    "url": "/topic"
}, {
    "method": "GET",
    "name": "主题管理-创建主题",
    "url": "/topic/create"
}, {
    "method": "POST",
    "name": "主题管理-创建主题",
    "url": "/topic"
}, {
    "method": "GET",
    "name": "主题管理-编辑主题",
    "url": "/topic/edit/.+"
}, {
    "method": "POST",
    "name": "主题管理-编辑主题",
    "url": "/topic/edit/.+"
}, {
    "method": "POST",
    "name": "主题管理-删除主题",
    "url": "/topic/delete/.+"
}, {
    "method": "GET",
    "name": "菜单管理-菜单列表",
    "url": "/menu"
}, {
    "method": "GET",
    "name": "菜单管理-创建菜单",
    "url": "/menu/create"
}, {
    "method": "POST",
    "name": "菜单管理-创建菜单",
    "url": "/menu"
}, {
    "method": "GET",
    "name": "菜单管理-编辑菜单",
    "url": "/menu/edit/.+"
}, {
    "method": "POST",
    "name": "菜单管理-编辑菜单",
    "url": "/menu/edit/.+"
}, {
    "method": "POST",
    "name": "菜单管理-删除菜单",
    "url": "/menu/delete/.+"
}, {
    "method": "GET",
    "name": "评论列表",
    "url": "/comment"
}, {
    "method": "POST",
    "name": "评论管理-审核通过",
    "url": "/comment/approve"
}, {
    "method": "POST",
    "name": "评论管理-审核不通过",
    "url": "/comment/reject"
}, {
    "method": "POST",
    "name": "评论管理-删除评论",
    "url": "/comment/delete"
}, {
    "method": "GET",
    "name": "文章列表-已发布文章",
    "url": "/article"
}, {
    "method": "GET",
    "name": "文章管理-创建文章",
    "url": "/article/create"
}, {
    "method": "POST",
    "name": "文章管理-创建文章",
    "url": "/article"
}, {
    "method": "GET",
    "name": "文章管理-编辑文章",
    "url": "/article/edit/.+"
}, {
    "method": "POST",
    "name": "文章管理-编辑文章",
    "url": "/article/edit/.+"
}, {
    "method": "POST",
    "name": "文章管理-删除文章",
    "url": "/article/delete/.+"
}, {
    "method": "GET",
    "name": "文章管理-预览文章",
    "url": "/article/preview/.+"
}, {
    "method": "GET",
    "name": "邮件模板列表",
    "url": "/mail"
}, {
    "method": "GET",
    "name": "邮件模板管理-创建模板",
    "url": "/mail/create"
}, {
    "method": "POST",
    "name": "邮件模板管理-创建模板",
    "url": "/mail"
}, {
    "method": "GET",
    "name": "邮件模板管理-编辑模板",
    "url": "/mail/edit/.+"
}, {
    "method": "POST",
    "name": "邮件模板管理-编辑模板",
    "url": "/mail/edit/.+"
}, {
    "method": "POST",
    "name": "邮件模板管理-删除模板",
    "url": "/mail/delete/.+"
}, {
    "method": "GET",
    "name": "页面管理-页面列表",
    "url": "/page"
}, {
    "method": "GET",
    "name": "页面管理-创建页面",
    "url": "/page/create"
}, {
    "method": "POST",
    "name": "页面管理-创建页面",
    "url": "/page"
}, {
    "method": "GET",
    "name": "页面管理-编辑页面",
    "url": "/page/edit/.+"
}, {
    "method": "POST",
    "name": "页面管理-编辑页面",
    "url": "/page/edit/.+"
}, {
    "method": "POST",
    "name": "页面管理-删除页面",
    "url": "/page/delete"
}, {
    "method": "GET",
    "name": "广告位管理-广告位列表",
    "url": "/banner"
}, {
    "method": "GET",
    "name": "广告位管理-创建广告位",
    "url": "/banner/create"
}, {
    "method": "POST",
    "name": "广告位管理-创建广告位",
    "url": "/banner"
}, {
    "method": "GET",
    "name": "广告位管理-编辑广告位",
    "url": "/banner/edit/.+"
}, {
    "method": "POST",
    "name": "广告位管理-编辑广告位",
    "url": "/banner/edit/.+"
}, {
    "method": "POST",
    "name": "广告位管理-删除广告位",
    "url": "/banner/delete/.+"
}, {
    "method": "GET",
    "name": "页面缓存清理",
    "url": "/tmpl"
}]

const menuList = [{
    name: '用户管理',
    url: '/account',
    title: '用户管理'
}, {
    name: '角色管理',
    url: '/role',
    title: '角色管理'
}, {
    name: '资源管理',
    url: '/resource',
    title: '资源管理'
}, {
    name: '菜单管理',
    url: '/menu',
    title: '菜单管理'
}, {
    name: '文章管理',
    url: '/article',
    title: '文章管理'
}, {
    name: '用户评论管理',
    url: '/comment',
    title: '用户评论管理'
}]
async function checkData() {
    await Model.sync()
    const admin = await Model.account.findOne({
        where: {
            id: 1
        }
    })
    if (admin) {
        return
    }

    const defaultAdminEmail = config.site.defaultAdminEmail
    const defaultAdminPassword = config.site.defaultAdminPassword

    const defaultAdmin = await Model.account.create({
        id: 1,
        email: defaultAdminEmail,
        password: defaultAdminPassword
    })

    const adminRole = await Model.role.create({
        name: "超级管理员"
    })

    const accounts_roles = await Model.accounts_roles.create({
        account_id: defaultAdmin.id,
        role_id: adminRole.id
    })
    const resources = await Model.resource.bulkCreate(resourceList)
    await Model.roles_resources.bulkCreate(resources.map(function(resource) {
        return {
            resource_id: resource.id,
            role_id: adminRole.id
        }
    }))

    const menus = await Model.menu.bulkCreate(menuList)
    await Model.roles_menus.bulkCreate(menus.map(function(menu) {
        return {
            menu_id: menu.id,
            role_id: adminRole.id
        }
    }))
}
//account * * role
//role * * resource
//role * * menu
module.exports = checkData