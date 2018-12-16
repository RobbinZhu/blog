export default {
    template: `
<div class="panel">
	<header class="title">
		修改Banner
	</header>
	<div class="widget">
		<form class="form" novalidate v-on:submit.prevent="update">
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
				<button type="submit" class="btn btn-primary">提交</button>
			</div>
		</form>
	</div>
</div>`,
    data: function() {
        return {
            banner: {},
            id: this.$route.query.id
        }
    },
    async mounted() {
        this.banner = await this.$api.banner.getById(this.id)
    },
    methods: {
        async update() {
            await this.$api.banner.update(this.banner.id, this.banner)
            this.$message.info('编辑Banner成功', 10000)
            this.$router.go(-1)
        }
    }
}