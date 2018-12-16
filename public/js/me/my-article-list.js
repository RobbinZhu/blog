import ArticleData from './my-article-data.js'

function debounce(fn, idle) {
    let timeout
    return function() {
        const ctx = this,
            args = arguments
        clearTimeout(timeout)
        timeout = setTimeout(function() {
            fn.apply(ctx, args)
        }, idle)
    }
}

export default {
    template: `
<div class="my-article-list">
    <div class="my-article-action" v-if="ArticleData.selectedTopic">
        <button class="btn" @click="createArticle()">添加文章</button>
    </div>
    <ul v-if="ArticleData.selectedTopic">
        <li :class="{active: ArticleData.selectedArticle === article, published: article.status>0}" @click="selectArticle(article)" v-for="article in articles">
        <input type="text" v-model="article.title" @input="updateArticleTitle(article.id, article.title)"/>
        <div>
        <span @click="showDeleteArticleModal(article, $event)">删除</span>
        <span @click="showSetArticleModal(article, $event)">设置</span>
        </div>
        </li>
    </ul>
    <div class="modal-mask" :class="{show:isSetArticleShow}">
        <div class="modal-content" v-if="selectedArticle">
            <div class="modal-title">设置文章信息
                <button class="btn btn-grey" @click="isSetArticleShow=false">关闭</button>
            </div>
            <div class="modal-input">
                <label for="topic-name">描述</label>
                <div>
                <input class="modal-input-text" type="text" v-model="selectedArticle.description" @input="updateArticle(selectedArticle)"/>
                </div>
            </div>
            <div class="modal-input">
                <label for="topic-name">图片</label>
                <div>
                <input class="modal-input-text" type="text" v-model="selectedArticle.thumb" @input="updateArticle(selectedArticle)"/>
                </div>
                <img class="modal-input-img" v-if="selectedArticle.thumb" :src="selectedArticle.thumb" alt=""/>
            </div>
        </div>
    </div>
    <div class="modal-mask" :class="{show:isDeleteArticleShow}">
        <div class="modal-content" v-if="selectedArticle">
            <div class="modal-title">确认删除文章吗？</div>
            <div class="modal-input">
                <label for="topic-name">文章名</label>
                <div class="modal-input-text">{{selectedArticle.title}}</div>
            </div>
            <div class="modal-operation">
                <button class="btn btn-primary" @click="deleteArticle(selectedArticle)">确定</button>
                <button class="btn btn-grey" @click="isDeleteArticleShow=null">取消</button>
            </div>
        </div>
    </div>
</div>`,
    data: function() {
        return {
            articles: [],
            articlesAll: [],
            ArticleData: ArticleData,
            selectedArticle: null,
            isDeleteArticleShow: false,
            isSetArticleShow: false
        }
    },
    async mounted() {
        this.articlesAll = await this.$api.get('/me/article/all')
    },
    watch: {
        'ArticleData.selectedTopic': function(topic) {
            if (topic) {
                this.articles = this.articlesAll.filter(function(article) {
                    return article.topic_id == topic.id
                })
            } else {
                this.articles = []
            }
            this.ArticleData.selectedArticle = null
        }
    },
    methods: {
        updateArticleTitle: debounce(async function(id, text) {
            const title = (text || '').trim()
            if (!title.length) {
                return
            }
            await this.$api.post('/me/article/' + id, {
                title: title
            })
            this.$message.success('文章名称已更新')
        }, 1000),
        async createArticle() {
            const article = await this.$api.post('/me/article', {
                topic_id: this.ArticleData.selectedTopic.id
            })
            this.articlesAll.push(article)
            this.articles.push(article)
            this.selectArticle(article)
        },
        updateArticle: debounce(async function(article) {
            await this.$api.post('/me/article/info/' + article.id, article)
            this.$message.success('文章信息已更新')
        }, 1000),
        selectArticle(article) {
            this.ArticleData.selectedArticle = article
        },
        showDeleteArticleModal(article, $event) {
            this.selectedArticle = article
            this.isDeleteArticleShow = true
            $event.preventDefault()
            $event.stopPropagation()
        },
        showSetArticleModal(article, $event) {
            this.selectedArticle = article
            this.isSetArticleShow = true
            $event.preventDefault()
            $event.stopPropagation()
        },
        async deleteArticle(article) {
            await this.$api.delete('/me/article/' + article.id)
            this.$message.success('文章已删除')
            this.ArticleData.selectedArticle = null
            this.selectedArticle = null
            this.isDeleteArticleShow = false
            this.articlesAll.splice(this.articlesAll.indexOf(article), 1)
            this.articles.splice(this.articles.indexOf(article), 1)
        }
    }
}