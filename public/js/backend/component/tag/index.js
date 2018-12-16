import Pagination from '../pagination.js'

export default {
    template: `
<div class="panel">
    <header class="title">
        标签列表
        <router-link class="btn" :to="'/tag/create'">添加新标签</router-link>
    </header>
    <div class="widget">
        <ul class="list">
            <li>
                <div class="col col-4">标题</div>
                <div class="col col-4">英文标题</div>
                <div class="col col-2">操作</div>
            </li>
            <li v-for="tag in tags.rows">
                <div class="col col-4">{{tag.title}}</div>
                <div class="col col-4">{{tag.title_en}}</div>
                <div class="col col-2 operation">
                    <router-link class="btn" :to="'/edit?id=' + tag.id">编辑</router-link>
                    <router-link class="btn" :to="'/tag/delete?id=' + tag.id">删除</router-link>
                </div>
            </li>
        </ul>
        <pagination :change="handlePageChange" :data="tags"></pagination>
    </div>
</div>`,
    data: function() {
        return {
            tags: {
                rows: [],
                count: 0
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
        handlePageChange(page) {
            this.page = page
            this.load()
        },
        async load() {
            this.tags = await this.$api.tag.list(this.page, {})
        }
    }
}