import Pagination from '../pagination.js'
export default {
    template: `
<div class="panel">
    <header class="title">
        邮件模板列表
        <router-link class="btn" to="/mail/create">添加新模版</router-link>
    </header>
    <div class="widget">
        <ul class="list">
            <li>
                <div class="col col-4">标识码</div>
                <div class="col col-4">标题</div>
                <div class="col col-2">操作</div>
            </li>
            <li v-for="mail in mails.rows">
                <div class="col col-4">{{mail.code}}</div>
                <div class="col col-4">{{mail.title}}</div>
                <div class="col col-2 operation">
                    <router-link to="'/mail/edit?id=' + mail.id">编辑</router-link>
                    <router-link to="'/mail/delete?id=' + mail.id">删除</router-link>
                </div>
            </li>
        </ul>
        <pagination :change="handlePageChange" :data="mails"></pagination>
    </div>
</div>`,
    data: function() {
        return {
            mails: {
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
            this.mails = await this.$api.mail.list(this.page, {})
        }
    }
}