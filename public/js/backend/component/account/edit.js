export default {
    template: `
<div class="panel">
	<header class="title">
		修改账号
	</header>
	<div class="widget">
		<form class="form" novalidate v-on:submit.prevent="update">
			<div class="form-group">
				<label for="name" class="control-label">用户名</label>
				<div class="control-item control-input">
					<input v-model="account.name" type="text" class="form-control" name="name">
				</div>
			</div>
			<div class="form-group">
				<label for="email" class="control-label">邮箱</label>
				<div class="control-item control-input">
					<input v-model="account.email" type="text" class="form-control" name="email">
				</div>
			</div>
			<!--<div class="form-group">
				<label for="password" class="control-label">密码</label>
				<div class="control-item control-input">
					<input v-model="account.password" type="password" class="form-control" name="password">
				</div>
			</div>-->
			<div class="form-group">
				<button type="submit" class="btn">提交</button>
			</div>
		</form>
	</div>
</div>`,
    data: function() {
        return {
            account: {},
            id: this.$route.query.id
        }
    },
    async mounted() {
        this.account = await this.$api.account.getById(this.id)
    },
    methods: {
        async update() {
            await this.$api.account.update(this.account.id, {
                name: this.account.name,
                email: this.account.email
            })
            this.$message.info('修改账号成功', 10000)
            this.$router.go(-1)
        }
    }
}