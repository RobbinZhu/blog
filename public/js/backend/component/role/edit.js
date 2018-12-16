export default {
    template: `
<div class="panel">
	<header class="title">
		修改角色
	</header>
	<div class="widget">
		<form class="form" novalidate v-on:submit.prevent="add">
			<div class="form-group">
				<label for="name" class="control-label">角色名称</label>
				<div class="control-item control-input">
					<input v-model="role.name" type="text" class="form-control" name="name">
				</div>
			</div>
			<div class="form-group">
				<label for="description" class="control-label">角色描述</label>
				<div class="control-item control-input">
					<input v-model="role.description" type="text" class="form-control" name="description">
				</div>
			</div>
			<div class="form-group">
				<button type="submit" class="btn btn-primary">提交</button>
			</div>
		</form>
	</div>
</div>`,
    data: function() {
        return {
            role: {
                name: '',
                description: ''
            },
            id: this.$route.query.id
        }
    },
    async mounted() {
        this.role = await this.$api.role.getById(this.id)
    },
    methods: {
        async add() {
            await this.$api.role.update(this.role.id, this.role)
            this.$message.info('修改角色成功', 10000)
            this.$router.go(-1)
        }
    }
}