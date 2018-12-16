export default {
    template: `
    <ul class="nav">
        <li v-for="menu in menus">
            <router-link :to="menu.url" :class="{active: menu.active}">{{menu.name}}</router-link>
            <ul v-if="menu.children.length">
                <li v-for="child in menu.children">
                    <router-link :to="child.url" :class="{active: menu.active}">{{child.name}}</router-link>
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
        const menus = await this.$api.get('/service/admin/menus')
        const menuMap = {}
        const topMenus = []
        let activeMenu
        menus.forEach(function(menu) {
            if (!menu.parent_id) {
                topMenus.push(menu)
            }
            menu.url = menu.url
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