import accountIndex from './component/account/index.js'
import accountCreate from './component/account/create.js'
import accountEdit from './component/account/edit.js'
import accountAssignRole from './component/account/assign_role.js'

import articleIndex from './component/article/index.js'
//import articleCreate from './component/article/create.js'
//import articleEdit from './component/article/edit.js'

import bannerIndex from './component/banner/index.js'
import bannerCreate from './component/banner/create.js'
import bannerEdit from './component/banner/edit.js'

import commentIndex from './component/comment/index.js'
// import commentCreate from './component/comment/create.js'
// import commentEdit from './component/comment/edit.js'

// import contentIndex from './component/content/index.js'
//import contentCreate from './component/content/create.js'
//import contentEdit from './component/content/edit.js'

import githubIndex from './component/github/index.js'
//import githubCreate from './component/github/create.js'
//import githubEdit from './component/github/edit.js'

import mailIndex from './component/mail/index.js'
import mailCreate from './component/mail/create.js'
import mailEdit from './component/mail/edit.js'

import menuIndex from './component/menu/index.js'
import menuCreate from './component/menu/create.js'
import menuEdit from './component/menu/edit.js'

//import pageIndex from './component/page/index.js'
//import pageCreate from './component/page/create.js'
//import pageEdit from './component/page/edit.js'

import resourceIndex from './component/resource/index.js'
import resourceCreate from './component/resource/create.js'
import resourceEdit from './component/resource/edit.js'

import roleIndex from './component/role/index.js'
import roleCreate from './component/role/create.js'
import roleEdit from './component/role/edit.js'
import roleAssignMenu from './component/role/assign_menu.js'
import roleAssignResource from './component/role/assign_resource.js'

import socialIndex from './component/social/index.js'
//import socialCreate from './component/social/create.js'
//import socialEdit from './component/social/edit.js'

import tagIndex from './component/tag/index.js'
import tagCreate from './component/tag/create.js'
import tagEdit from './component/tag/edit.js'

import topicIndex from './component/topic/index.js'
//import topicCreate from './component/topic/create.js'
//import topicEdit from './component/topic/edit.js'

import login from './component/login/index.js'

const routes = [{
    "path": "/login",
    "component": login,
    "meta": {
        "title": "登录"
    }
}, {
    "path": "/",
    "meta": {
        "title": "后台首页"
    }
}, {
    "path": "/account",
    "component": accountIndex,
    "meta": {
        "title": "用户列表"
    }
}, {
    "path": "/account/create",
    "component": accountCreate,
    "meta": {
        "title": "创建用户"
    }
}, {
    "path": "/account/edit",
    "component": accountEdit,
    "meta": {
        "title": "修改用户"
    }
}, {
    "path": "/account/assign_role",
    "component": accountAssignRole,
    "meta": {
        "title": "分配角色"
    }
}, {
    "path": "/article",
    "component": articleIndex,
    "meta": {
        "title": "文章列表"
    }
}, {
    "path": "/banner",
    "component": bannerIndex,
    "meta": {
        "title": "广告位列表"
    }
}, {
    "path": "/banner/create",
    "component": bannerCreate,
    "meta": {
        "title": "创建广告位"
    }
}, {
    "path": "/banner/edit",
    "component": bannerEdit,
    "meta": {
        "title": "修改广告位"
    }
}, {
    "path": "/comment",
    "component": commentIndex,
    "meta": {
        "title": "评论列表"
    }
}, {
    "path": "/github",
    "component": githubIndex,
    "meta": {
        "title": "Github"
    }
}, {
    "path": "/mail",
    "component": mailIndex,
    "meta": {
        "title": "邮件模板列表"
    }
}, {
    "path": "/mail/create",
    "component": mailCreate,
    "meta": {
        "title": "创建邮件模板"
    }
}, {
    "path": "/mail/edit",
    "component": mailEdit,
    "meta": {
        "title": "修改邮件模板"
    }
}, {
    "path": "/menu",
    "component": menuIndex,
    "meta": {
        "title": "菜单列表"
    }
}, {
    "path": "/menu/create",
    "component": menuCreate,
    "meta": {
        "title": "创建菜单"
    }
}, {
    "path": "/menu/edit",
    "component": menuEdit,
    "meta": {
        "title": "修改菜单"
    }
}, {
    "path": "/resource",
    "component": resourceIndex,
    "meta": {
        "title": "资源列表"
    }
}, {
    "path": "/resource/create",
    "component": resourceCreate,
    "meta": {
        "title": "创建资源"
    }
}, {
    "path": "/resource/edit",
    "component": resourceEdit,
    "meta": {
        "title": "修改资源"
    }
}, {
    "path": "/role",
    "component": roleIndex,
    "meta": {
        "title": "角色列表"
    }
}, {
    "path": "/role/create",
    "component": roleCreate,
    "meta": {
        "title": "创建角色"
    }
}, {
    "path": "/role/edit",
    "component": roleEdit,
    "meta": {
        "title": "修改角色"
    }
}, {
    "path": "/role/assign_menu",
    "component": roleAssignMenu,
    "meta": {
        "title": "分配菜单"
    }
}, , {
    "path": "/role/assign_resource",
    "component": roleAssignResource,
    "meta": {
        "title": "分配资源"
    }
}, {
    "path": "/social",
    "component": socialIndex,
    "meta": {
        "title": ""
    }
}, {
    "path": "/tag",
    "component": tagIndex,
    "meta": {
        "title": "标签列表"
    }
}, {
    "path": "/tag/create",
    "component": tagCreate,
    "meta": {
        "title": "创建标签"
    }
}, {
    "path": "/tag/edit",
    "component": tagEdit,
    "meta": {
        "title": "修改标签"
    }
}, {
    "path": "/topic",
    "component": topicIndex,
    "meta": {
        "title": "主题列表"
    }
}]

const router = new VueRouter({
    mode: 'history',
    base: '/portal',
    routes,
    linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || document.title
    next()
})
export default router