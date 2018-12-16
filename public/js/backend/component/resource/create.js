export default {
    template: `
<div class="panel">
	<header class="title">
		创建资源
	</header>
	<div class="widget">
		<form class="form" novalidate v-on:submit.prevent="add">
			<div class="form-group">
				<label for="name" class="control-label">资源名称</label>
				<div class="control-item control-input">
					<input v-model="resource.name" type="text" class="form-control" name="name">
				</div>
			</div>
			<div class="form-group">
				<label for="url" class="control-label">URL</label>
				<div class="control-item control-input">
					<input v-model="resource.url" type="text" class="form-control" name="url">
				</div>
			</div>
			<div class="form-group">
				<label for="method" class="control-label">访问方法</label>
				<div class="control-item control-select">
					<select v-model="resource.method" name="method" class="form-control">
						<option value="GET">GET</option>
						<option value="POST">POST</option>
					</select>
				</div>
			</div>
			<div class="form-group">
				<button type="submit" class="btn btn-primary">创建</button>
			</div>
		</form>
	</div>
</div>`,
    data: function() {
        return {
            resource: {
                name: '',
                url: '',
                method: ''
            }
        }
    },
    methods: {
        async add() {
            await this.$api.resource.create(this.resource)
            this.$message.info('创建资源成功', 10000)
            this.$router.go(-1)
        }
    }
}