export default {
    template: `
<section class="panel">
    <header class="title">
        分配角色
    </header>
    <div class="widget">
        <form class="form" novalidate v-on:submit.prevent="setRoles">
            <div class="form-group">
                <label class="control-label">用户</label>
                <label class="control-label">{{account.name}}</label>
            </div>
            <div class="form-group">
                <ul>
                    <li v-for="role in roles">
                        <input v-model="selectedRoleId" :id="'role-'+role.id" type="checkbox" :value="role.id"/>
                        <label :for="'role-'+role.id">{{role.name}}</label>
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
            roles: [],
            account: {},
            selectedRoleId: []
        }
    },
    async mounted() {
        const id = this.$route.query.id
        const loadAccount = this.$api.account.findOne({
            id
        })
        const loadRole = this.$api.role.all({})
        const loadAccountRole = this.$api.accounts_roles.all({
            account_id: id
        })

        const roles = await loadRole

        const accounts_roles = await loadAccountRole
        const accountRoleMap = {}
        const selectedRoleId = []
        accounts_roles.forEach(function(account_role) {
            accountRoleMap[account_role.role_id] = account_role
            selectedRoleId.push(account_role.role_id)
        })
        this.selectedRoleId = selectedRoleId

        roles.forEach(function(role) {
            role.accountRole = accountRoleMap[role.id]
        })
        this.roles = roles
        this.account = await loadAccount
    },
    methods: {
        async setRoles() {
            if (!this.account.id) {
                return
            }
            await this.$api.account.setRoles(this.account.id, this.selectedRoleId)
            this.$message.info('分配角色成功', 10000)
            this.$router.go(-1)
        }
    }
}