export default {
    template: `
<section class="panel">
    <header class="title">
        分配菜单
    </header>
    <div class="widget">
        <form class="form" novalidate v-on:submit.prevent="setMenus">
            <div class="form-group">
                <label class="control-label">角色</label>
                <label class="control-label">{{role.name}}</label>
            </div>
            <div class="form-group">
                <ul>
                    <li v-for="menu in menus">
                        <input v-model="selectedMenuId" :id="'menu-'+menu.id" type="checkbox" :value="menu.id"/>
                        <label :for="'menu-'+menu.id">{{menu.name}} {{menu.url}}</label>
                        <ul v-if="menu.children.length">
                            <li v-for="child in menu.children">
                                <input v-model="selectedMenuId" :id="'menu-'+child.id" type="checkbox" :value="child.id"/>
                                <label :for="'menu-'+child.id">{{child.name}} {{child.url}}</label>
                                <ul v-if="child.children.length">
                                    <li v-for="gchild in child.children">
                                        <input v-model="selectedMenuId" :id="'menu-'+gchild.id" type="checkbox" :value="gchild.id"/>
                                        <label :for="'menu-'+gchild.id">{{gchild.name}} {{gchild.url}}</label>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="form-group">
                <button class="btn" type="submit">提交</button>
            </div>
        </form>
    </div>
</section>`,
    data: function() {
        return {
            menus: [],
            role: {},
            selectedMenuId: [],
            role_id: this.$route.query.id | 0
        }
    },
    async mounted() {
        const loadRole = this.$api.role.findOne({
            id: this.role_id
        })
        const loadMenu = this.$api.menu.all({})
        const loadRoleMenu = this.$api.roles_menus.all({
            role_id: this.role_id
        })

        const menus = await loadMenu
        const menuMap = {}
        menus.forEach(function(menu) {
            menu.children = []
            menuMap[menu.id] = menu
        })

        const roles_menus = await loadRoleMenu
        const roleMenuMap = {}
        const selectedMenuId = []
        roles_menus.forEach(function(role_menu) {
            roleMenuMap[role_menu.menu_id] = role_menu
            selectedMenuId.push(role_menu.menu_id)
        })
        this.selectedMenuId = selectedMenuId

        const topMenus = []
        menus.forEach(function(menu) {
            menu.roleMenu = roleMenuMap[menu.id]
            if (menu.parent_id) {
                const parent = menuMap[menu.parent_id]
                if (parent) {
                    parent.children.push(menu)
                }
            } else {
                topMenus.push(menu)
            }
        })
        this.menus = topMenus
        this.role = await loadRole
    },
    methods: {
        async setMenus() {
            await this.$api.role.setMenus(this.role_id, this.selectedMenuId)
            this.$message.info('分配菜单成功', 10000)
            this.$router.go(-1)
        }
    }
}