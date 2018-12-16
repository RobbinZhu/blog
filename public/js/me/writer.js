import Markdown from './markdown.js'
import MyTopicList from './my-topic-list.js'
import MyArticleList from './my-article-list.js'
import ArticleData from './my-article-data.js'

export default {
    template: `
<div class="layout">
    <div class="layout-left">
        <my-topic-list></my-topic-list>
    </div>
    <div class="layout-left">
        <my-article-list></my-article-list>
    </div>
    <div class="layout-right">
        <markdown v-if="ArticleData.selectedArticle"></markdown>
    </div>
</div>
`,
    components: {
        Markdown,
        MyArticleList,
        MyTopicList
    },
    data: function() {
        return {
            ArticleData: ArticleData
        }
    }
}