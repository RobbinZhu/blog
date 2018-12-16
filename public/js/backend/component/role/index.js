import Pagination from '../pagination.js'

export default {
    template: `
<div class="panel">
	<header class="title">
		角色列表
		<router-link class="btn" :to="'/role/create'">添加新角色</router-link>
	</header>
	<div class="widget">
		<ul class="list">
			<li>
				<div class="col col-6">名称</div>
				<div class="col col-4">操作</div>
			</li>
			<li v-for="role in roles.rows">
				<div class="col col-6">{{role.name}}</div>
				<div class="col col-4 operation">
					<router-link :to="'/role/assign_resource?id=' + role.id">分配资源</router-link>
					<router-link :to="'/role/assign_menu?id=' + role.id">分配菜单</router-link>
					<router-link :to="'/role/edit?id=' + role.id">编辑</router-link>
					<router-link :to="'/role/delete?id=' + role.id">删除</router-link>
				</div>
			</li>
		</ul>
		<pagination :change="handlePageChange" :data="roles"></pagination>
	</div>
</div>`,
    data: function() {
        return {
            roles: {
                rows: [],
                count: 0
            },
            page: this.$route.query.page | 0
        }
    },
    components: {
        Pagination
    },
    mounted() {
        this.load()
    },
    methods: {
        handlePageChange(page) {
            this.page = page
            this.load()
        },
        async load() {
            this.roles = await this.$api.role.list(this.page, {})
        }
    }
}