import Pagination from '../pagination.js'
export default {
    template: `
<div class="panel">
	<header class="title">
		Banner列表
		<router-link class="btn" :to="'/banner/create'">添加新Banner</router-link>
	</header>
	<div class="widget">
		<ul class="list">
			<li>
				<div class="col col-2">ID</div>
				<div class="col col-5">名称</div>
				<div class="col col-3">操作</div>
			</li>
			<li v-for="banner in banners.rows">
				<div class="col col-2">{{banner.id}}</div>
				<div class="col col-5">{{banner.name}}</div>
				<div class="col col-3 operation">
					<router-link :to="'/banner/edit?id=' + banner.id">查看</router-link>
					<a @click="remove(banner)">删除</a>
				</div>
			</li>
		</ul>
		<pagination :change="handlePageChange" :data="banners"></pagination>
	</div>
</div>`,
    data: function() {
        return {
            banners: {
                rows: [],
                count: 0
            },
            page: this.$route.query.page
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
            this.banners = await this.$api.banner.list(this.page, {})
        },
        remove(banner) {

        }
    }
}