import router from './backend/router.js'
import MyMenus from './backend/component/my-menus.js'
import MyAccount from './backend/component/my-account.js'
import toast from './me/message.js'
import _ from './backend/api.js'
const app = new Vue({
    router: router,
    components: {
        MyMenus,
        MyAccount
    }
}).$mount('.body')