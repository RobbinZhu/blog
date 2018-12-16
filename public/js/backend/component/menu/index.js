import Pagination from '../pagination.js'
export default {
    template: `
<div class="panel">
	<header class="title">
		菜单列表
		<!--<a class="btn" :href="'/portal/menu/create?parent_id=' + (parent && parent.id || '')">添加新菜单</a>-->
		<router-link class="btn" :to="'/menu/create?parent_id=' + (parent && parent.id || '')">添加新菜单</router-link>
	</header>
	<div class="widget">
		<ul class="list">
			<li v-if="parent">
				<b>{{parent.name}}</b>的下级菜单
				<router-link class="btn" :to="'/menu?parent_id=' + (parent && parent.parent_id || '')">返回上级</router-link>
			</li>
			<li>
				<div class="col col-4">名称</div>
				<div class="col col-4">标题</div>
				<div class="col col-2">操作</div>
			</li>
			<li v-for="menu in menus.rows">
				<div class="col col-4">{{menu.name}}</div>
				<div class="col col-4">{{menu.title}}</div>
				<div class="col col-2 operation">
					<router-link class="btn" :to="'/menu?parent_id=' + menu.id">下级菜单</router-link>
					<router-link class="btn" :to="'/menu/edit?id=' + menu.id">编辑</router-link>
					<router-link class="btn" :to="'/menu/delete?id=' + menu.id">删除</router-link>
				</div>
			</li>
		</ul>
		<pagination :change="handlePageChange" :data="menus"></pagination>
	</div>
</div>`,
    data: function() {
        return {
            parent: null,
            menus: {
                rows: [],
                count: 0
            },
            page: this.$route.query.page | 0,
            parent_id: this.$route.query.parent_id || 0
        }
    },
    components: {
        Pagination
    },
    mounted() {
        this.load()
    },

    watch: {
        $route(to, from) {
            this.parent_id = to.query.parent_id
            this.page = to.query.page
            this.load()
        }
    },
    methods: {
        handlePageChange(page) {
            this.page = page
            this.parent_id = this.$route.query.parent_id || 0
            this.load()
        },
        async load() {
            this.menus = await this.$api.menu.list(this.page, {
                parent_id: this.parent_id
            })

            if (this.parent_id) {
                this.parent = await this.$api.menu.findOne({
                    id: this.parent_id
                })
            }
        }
    }
}