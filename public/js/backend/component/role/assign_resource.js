export default {
    template: `
<section class="panel">
    <header class="title">
        分配资源
    </header>
    <div class="widget">
        <form class="form" novalidate v-on:submit.prevent="setResources">
            <div class="form-group">
                <label class="control-label">角色</label>
                <label class="control-label">{{role.name}}</label>
            </div>
            <div class="form-group">
                <ul>
                    <li v-for="resource in resources">
                        <input :id="'resource'+resource.id" type="checkbox" v-model="selectedResourceId" :value="resource.id"/>
                        <label :for="'resource'+resource.id">{{resource.name}}</label>
                        <label>{{resource.method}}</label>
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
            resources: [],
            role: {},
            selectedResourceId: [],
            role_id: this.$route.query.id | 0
        }
    },
    async mounted() {
        const loadRole = this.$api.role.findOne({
            id: this.role_id
        })
        const loadResource = this.$api.resource.all({})
        const loadRoleResource = this.$api.roles_resources.all({
            role_id: this.role_id
        })

        const resources = await loadResource

        const roles_resources = await loadRoleResource
        const roleResourceMap = {}
        const selectedResourceId = []
        roles_resources.forEach(function(role_resource) {
            roleResourceMap[role_resource.resource_id] = role_resource
            selectedResourceId.push(role_resource.resource_id)
        })
        this.selectedResourceId = selectedResourceId

        resources.forEach(function(resource) {
            resource.roleResource = roleResourceMap[resource.id]
        })
        this.resources = resources
        this.role = await loadRole
    },
    methods: {
        async setResources() {
            await this.$api.role.setResources(this.role_id, this.selectedResourceId)
            this.$message.info('分配资源成功', 10000)
            this.$router.go(-1)
        }
    }
}