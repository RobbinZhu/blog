export default {
    template: `
<div class="panel">
	<header class="title">
		管理员登录
	</header>
	<div class="widget">
		<form class="form" novalidate v-on:submit.prevent="login">
			<div class="form-group">
				<label for="email" class="control-label">邮箱</label>
				<div class="control-item control-input">
					<input v-model="account.email" type="text" class="form-control" name="email">
				</div>
			</div>
			<div class="form-group">
				<label for="password" class="control-label">密码</label>
				<div class="control-item control-input">
					<input v-model="account.password" type="password" class="form-control" name="password">
				</div>
			</div>
			<div class="form-group">
				<button type="submit" class="btn btn-primary">登录</button>
			</div>
		</form>
	</div>
</div>`,
    data: function() {
        return {
            account: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        async login() {
            const account = await this.$api.admin.login(this.account)
            if (account) {
                // this.$message.info('登录成功', 10000)
                location.href = '/portal'
            }
        }
    }
}