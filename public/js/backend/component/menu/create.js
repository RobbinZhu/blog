export default {
    template: `
<div class="panel">
	<header class="title">
		创建菜单
	</header>
	<div class="widget">
		<form class="form" novalidate v-on:submit.prevent="add">
			<div class="form-group">
				<label for="name" class="control-label">名称</label>
				<div class="control-item control-input">
					<input v-model="menu.name" type="text" class="form-control" name="name">
				</div>
			</div>
			<div class="form-group">
				<label for="name_en" class="control-label">英文名称</label>
				<div class="control-item control-input">
					<input v-model="menu.name_en" type="text" class="form-control" name="name_en">
				</div>
			</div>
			<div class="form-group">
				<label for="url" class="control-label">URL</label>
				<div class="control-item control-input">
					<input v-model="menu.url" type="text" class="form-control" name="url">
				</div>
			</div>
			<div class="form-group">
				<label for="title" class="control-label">描述</label>
				<div class="control-item control-input">
					<input v-model="menu.title" type="text" class="form-control" name="title">
				</div>
			</div>
			<div class="form-group">
				<label for="title_en" class="control-label">英文描述</label>
				<div class="control-item control-input">
					<input v-model="menu.title_en" type="text" class="form-control" name="title_en">
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
            menu: {
                name: '',
                name_en: '',
                url: '',
                title: '',
                title_en: '',
                parent_id: this.$route.query.parent_id
            }
        }
    },
    methods: {
        async add() {
            const menu = await this.$api.menu.create(this.menu)
            this.$message.info('创建菜单成功', 10000)
            this.$router.go(-1)
        }
    }
}