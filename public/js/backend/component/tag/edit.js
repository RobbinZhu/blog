export default {
    template: `
<div class="panel">
	<header class="title">
		修改标签
	</header>
	<div class="widget">
		<form class="form" novalidate v-on:submit.prevent="update">
			<div class="form-group">
				<label for="title" class="control-label">标题</label>
				<div class="control-item control-input">
					<input v-model="tag.title" type="text" class="form-control" name="title">
				</div>
			</div>
			<div class="form-group">
				<label for="title_en" class="control-label">英文标题</label>
				<div class="control-item control-input">
					<input v-model="tag.title_en" type="text" class="form-control" name="title_en">
				</div>
			</div>
			<div class="form-group">
				<label for="url" class="control-label">URL</label>
				<div class="control-item control-input">
					<input v-model="tag.url" type="text" class="form-control" name="url">
				</div>
			</div>
			<div class="form-group">
				<button type="submit" class="btn btn-primary">修改</button>
			</div>
		</form>
	</div>
</div>`,
    data: function() {
        return {
            tag: {
                title: '',
                title_en: '',
                url: ''
            }
        }
    },
    async mounted() {
        this.tag = await this.$api.tag.getById(this.$route.query.id)
    },
    methods: {
        async update() {
            await this.$api.tag.update(this.tag.id, this.tag)
            this.$message.info('修改标签成功', 10000)
            this.$router.go(-1)
        }
    }
}