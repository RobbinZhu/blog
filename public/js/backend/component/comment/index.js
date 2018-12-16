import Pagination from '../pagination.js'
export default {
    template: `
<div class="panel">
	<header class="title">
		评论列表
	</header>
	<div class="widget">
		<ul>
			<li>
				<label>
				<input type="checkbox" class="select_all" target="item"> 全选</label>
				<button class="btn approve">
					通过审核
				</button>
				<button class="btn reject">
					设为不通过
				</button>
				<button class="btn delete">
					删除
				</button>
			</li>
			<li class="comment" v-for="comment in comments.rows">
				<p>
					<label class="msg">
						<input type="checkbox" name="item" class="comment_checkbox">
						ID: {{comment.id}}
					</label>
					<span @class="{active: comment.status}" class="label">
						已通过审核
					</span>
					<span @class="{none: comment.status > 0}" class="label">
						未通过审核
					</span>
					<button @class="{none: comment.status <= 0}" class="btn reject">
						设为不通过
					</button>
					<button @class="{none: comment.status > 0}" class="btn approve <%=(comment.status<=0?'':'none')%>">
						通过审核
					</button>
					<button class="btn delete">
						删除
					</button>
				</p>
			</li>
		</ul>
		<pagination :change="handlePageChange" :data="comments"></pagination>
	</div>
</div>`,
    data: function() {
        return {
            comments: {
                rows: [],
                count: 0
            },
            page: this.$route.query.id | 0
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
            this.load()
        },
        async load() {
            this.comments = await this.$api.comment.list(this.page, {})
        }
    }
}