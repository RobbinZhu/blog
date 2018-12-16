import Pagination from '../pagination.js'

export default {
    template: `
<div class="panel">
	<header class="title">
		资源列表
        <router-link class="btn" to="/resource/create">添加新资源</router-link>
	</header>
	<div class="widget">
		<ul class="list">
			<li>
				<div class="col col-3">名称</div>
				<div class="col col-3">URL</div>
				<div class="col col-2">访问方法</div>
				<div class="col col-2">操作</div>
			</li>
			<li v-for="resource in resources.rows">
				<div class="col col-3">{{resource.name}}</div>
				<div class="col col-3">{{resource.url}}</div>
				<div class="col col-2">{{resource.method}}</div>
				<div class="col col-2 operation">
                    <router-link :to="'/resource/edit?id='+ resource.id">编辑</router-link>
					<a @click="remove(resource)">删除</a>
				</div>
			</li>
		</ul>
		<pagination :change="handlePageChange" :data="resources"></pagination>
	</div>
</div>`,
    data: function() {
        return {
            resources: {
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
            this.resources = await this.$api.resource.list(this.page, {})
        },
        remove: function(resource) {
            // this.$api.resource.remove(resource)
        }
    }
}