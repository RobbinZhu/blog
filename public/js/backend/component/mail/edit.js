export default {
    template: `
<div class="panel">
	<header class="title">
		编辑邮件模板
	</header>
	<div class="widget">
		<form class="form" novalidate v-on:submit.prevent="update">
			<div class="form-group">
				<label for="code" class="control-label">标识码</label>
				<div class="control-item control-input">
					<input type="text" class="form-control" name="code" v-model="mail.code">
				</div>
			</div>
			<div class="form-group">
				<label for="title" class="control-label">标题</label>
				<div class="control-item control-input">
					<input type="text" class="form-control" name="title" v-model="mail.title">
				</div>
			</div>
			<div class="form-group">
				<label for="title_en" class="control-label">内容</label>
				<div class="control-item control-textarea">
					<textarea name="content" class="form-control" cols="30" rows="10" v-model="mail.content"></textarea>
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
            mail: {},
            id: this.$route.query.id
        }
    },
    async mounted() {
        this.mail = await this.$api.mail.getById(this.id)
    },
    methods: {
        async update() {
            await this.$api.mail.update(this.mail.id, this.mail)
            this.$message.info('编辑邮件模板成功', 10000)
            this.$router.go(-1)
        }
    }
}