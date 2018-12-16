import queryParam from '../static/query.js'

export default {
    template: `
    <ul class="nav">
        <li v-for="menu in menus">
            <a :href="menu.url" :class="{active: menu.active}">{{menu.name}}</a>
            <ul v-if="menu.children.length">
                <li v-for="child in menu.children">
                    <a :href="child.url" :class="{active: menu.active}">{{child.name}}</a>
                </li>
            </ul>
        </li>
    </ul>
`,
    data: function() {
        return {
            menus: []
        }
    },
    async mounted() {
        const currentPath = location.pathname
        const menus = await this.$api.get('/service/me/menus')
        const menuMap = {}
        const topMenus = []
        let activeMenu
        menus.forEach(function(menu) {
            if (!menu.parent_id) {
                topMenus.push(menu)
            }
            menu.url = '/portal' + menu.url
            menu.children = []
            menu.id && (menuMap[menu.id] = menu)
            if (menu.url == currentPath) {
                activeMenu = menu
            }
        })
        while (activeMenu) {
            activeMenu.active = true
            activeMenu = menuMap[activeMenu.parent_id]
        }
        menus.forEach(function(menu) {
            if (menu.parent_id) {
                const parent = menuMap[menu.parent_id]
                if (parent) {
                    parent.children.push(menu)
                }
            }
        })
        this.menus = topMenus
    },
    methods: {}
}