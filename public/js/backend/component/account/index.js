import Pagination from '../pagination.js'
export default {
    template: `
<div class="panel">
	<header class="title">
		账号列表
		<router-link to="/account/create" class="btn">添加新账号</router-link>
	</header>
	<div class="widget">
		<ul class="list">
			<li class="line">
				<div class="col col-2">用户名</div>
				<div class="col col-2">邮箱</div>
				<div class="col col-2">状态</div>
				<div class="col col-4">操作</div>
			</li>
			<li v-for="account in accounts.rows">
				<div class="col col-2">
					<router-link :to="'/account/edit?id=' + account.id">{{account.name}}</router-link>
				</div>
				<div class="col col-2">
					<router-link :to="'/account/edit?id=' + account.id">{{account.email}}</router-link>
				</div>
				<div class="col col-2">
					{{account.active?'正常':'已禁用'}}
				</div>
				<div class="col col-4 operation">
					<a v-if="account.active" @click="setActive(account, false)">禁用</a>
					<a v-if="!account.active" @click="setActive(account, true)">启用</a>
					<router-link :to="'/account/assign_role?id=' + account.id">分配角色</router-link>
					<router-link :to="'/account/edit?id=' + account.id">编辑</router-link>
				</div>
			</li>
		</ul>
		<pagination :change="handlePageChange" :data="accounts"></pagination>
	</div>
</div>`,
    data: function() {
        return {
            accounts: {
                rows: [],
                count: 5
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
            this.accounts = await this.$api.account.list(this.page, {})
        },
        async setActive(account, active) {
            await this.$api.account.update(account.id, {
                active
            })
            this.load()
        }
    }
}