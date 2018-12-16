export default {
    template: `
<div class="panel">
	<header class="title">
		创建Banner
	</header>
	<div class="widget">
		<form class="form" novalidate v-on:submit.prevent="add">
			<div class="form-group">
				<label for="name" class="control-label">名称</label>
				<div class="control-item control-input">
					<input v-model="banner.name" type="text" class="form-control" name="name">
				</div>
			</div>
			<div class="form-group">
				<label for="text" class="control-label">内容</label>
				<div class="control-item control-textarea">
					<textarea v-model="banner.text" class="form-control" name="text"></textarea>
				</div>
			</div>
			<div class="form-group">
				<label for="title" class="control-label">标题</label>
				<div class="control-item control-input">
					<input v-model="banner.title" type="text" class="form-control" name="title">
				</div>
			</div>
			<div class="form-group">
				<label for="hash" class="control-label">标识</label>
				<div class="control-item control-input">
					<input v-model="banner.hash" type="text" class="form-control" name="hash">
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
            banner: {
                name: '',
                text: '',
                title: '',
                hash: ''
            }
        }
    },
    methods: {
        async add() {
            const banner = await this.$api.banner.create(this.banner)
            this.$message.info('创建Banner成功', 10000)
            this.$router.go(-1)
        }
    }
}