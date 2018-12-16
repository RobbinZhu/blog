import Pagination from '../pagination.js'

export default {
    template: `
<div class="panel">
	<header class="title">
		主题列表
		<!--<router-link class="btn" :to="'/topic/create?parent_id='+ (parent && parent.id || '')">添加新主题</router-link>-->
	</header>
	<div class="widget">
		<ul class="list">
			<li v-if="parent">
				<b>{{parent.name}}</b>的下级主题
				<router-link class="btn" :to="'/topic?parent_id='+ (parent && parent.parent_id || '')">返回上级</router-link>
			</li>
			<li>
				<div class="col col-3">标题</div>
				<div class="col col-3">英文标题</div>
				<div class="col col-4">操作</div>
			</li>
			<li v-for="topic in topics.rows">
				<div class="col col-3">{{topic.name}}</div>
				<div class="col col-3">{{topic.name_en}}</div>
				<div class="col col-4 operation">
					<router-link class="btn" :to="'/topic?parent_id=' + topic.id">下级主题</router-link>
					<!--<router-link class="btn" :to="'/topic/edit?parent_id=' + topic.id">编辑</router-link>-->
					<router-link class="btn" :to="'/topic/delete?parent_id=' + topic.id">删除</router-link>
				</div>
			</li>
		</ul>
		<pagination :change="handlePageChange" :data="topics"></pagination>
	</div>
</div>`,
    data: function() {
        return {
            topics: {
                rows: [],
                count: 0
            },
            parent: null,
            page: this.$route.query.page | 0,
            parent_id: this.$route.query.parent_id | 0
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
            this.parent_id = this.$route.query.parent_id
            this.load()
        },
        async load() {
            const parent_id = this.parent_id
            this.topics = await this.$api.topic.list(this.page, {
                parent_id
            })
            if (parent_id) {
                this.parent = await this.$api.topic.findOne({
                    id: parent_id
                })
            }
        }
    }
}