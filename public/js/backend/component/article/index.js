import Pagination from '../pagination.js'
export default {
    template: `
<div class="panel">
    <header class="title">
        文章列表
    </header>
    <div class="widget">
        <ul class="list">
            <li>
                <div class="col col-7">标题</div>
                <div class="col col-3">操作</div>
            </li>
            <li v-for="article in articles.rows">
                <div class="col col-7">{{article.title}}</div>
                <div class="col col-3 operation">
                    <!--<router-link :to="'/article/edit?id=' + article.id">查看</router-link>
                    <router-link :to="'/article/delete?id=' + article.id">删除</router-link>-->
                </div>
            </li>
        </ul>
        <pagination :change="handlePageChange" :data="articles"></pagination>
    </div>
</div>`,
    data: function() {
        return {
            articles: {
                rows: [],
                count: 5
            },
            page: this.$route.query.page | 0
        }
    },
    components: {
        Pagination
    },
    mounted() {
        this.load()
    },
    methods: {
        async load() {
            this.articles = await this.$api.article.list(this.page, {})
        },
        handlePageChange(page) {
            this.page = page
            this.load()
        }
    }
}