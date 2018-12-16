export default {
    template: `<ul class="pagination">
    <li>
        <a @click="go(1)">
            首页
        </a>
    </li>
    <li v-for="pageNum in pages" :class="{active: pageNum == page}">
        <a @click="go(pageNum)">{{pageNum}}</a>
    </li>
    <li>
        <a @click="go(pageTotal)">
            尾页
        </a>
    </li>
</ul>
`,
    props: {
        data: {
            type: Object,
            required: true
        },
        change: {
            type: Function
        }
    },
    data: function() {
        return {
            pageSize: 10,
            path: undefined,
            page: 1
        }
    },
    computed: {
        pageTotal: function() {
            return Math.ceil(this.data.count / this.pageSize)
        },
        pages: function() {
            const currentPage = this.page | 0
            const pageTotal = this.pageTotal
            const pages = []
            for (let i = -5; i < 5; i++) {
                const page = currentPage + i
                if (page > 0 && page <= pageTotal) {
                    pages.push(page)
                }
            }
            return pages
        }
    },
    created() {
        this.page = this.$route.query.page || 1
    },
    methods: {
        go: function(page) {
            if (this.page == page) {
                return
            }
            const query = JSON.parse(JSON.stringify(this.$route.query))
            query.page = page
            this.page = page
            this.$router.push({
                path: this.path || this.$route.path,
                query: query
            })
            if (this.change) {
                this.change(page)
            }
        }
    }
}