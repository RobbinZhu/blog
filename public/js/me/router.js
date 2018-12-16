import Writer from './writer.js'
// import {} from '../vue-router.min.js'

const routes = [{
    "path": "/writer",
    "component": Writer,
    "meta": {
        "title": "写文章"
    }
}]

const router = new VueRouter({
    mode: 'history',
    base: '/me',
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || document.title
    next()
})
export default router