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
<div class="my-topic-list">
    <div class="my-topic-action">
        <button class="btn" @click="isTopicModalShow=true">添加文集</button>
    </div>
    <ul>
        <li :class="{active: ArticleData.selectedTopic === topic}" @click="selectTopic(topic)" v-for="topic in topics">
        <input type="text" v-model="topic.name" @input="updateTopicName(topic)"/>
        <span @click="showDeleteTopicModal(topic, $event)">删除</span>
        </li>
    </ul>
    <div class="modal-mask" :class="{show:isTopicModalShow}">
        <div class="modal-content">
            <div class="modal-title">添加文集</div>
            <div class="modal-input">
                <label for="topic-name">文集名</label>
                <input @keydown.enter="addTopic()" v-model="topic_name" type="text" name="topic-name" class="modal-input-text"/>
            </div>
            <div class="modal-operation">
                <button class="btn btn-primary" @click="addTopic()">确定</button>
                <button class="btn btn-grey" @click="isTopicModalShow=false">取消</button>
            </div>
        </div>
    </div>
    <div class="modal-mask" :class="{show:selectedTopic}">
        <div class="modal-content">
            <div class="modal-title">确认删除文集吗？</div>
            <div class="modal-input">
                <label for="topic-name">文集名</label>
                <div class="modal-input-text">{{selectedTopic&&selectedTopic.name}}</div>
            </div>
            <div class="modal-operation">
                <button class="btn btn-primary" @click="deleteTopic(selectedTopic)">确定</button>
                <button class="btn btn-grey" @click="selectedTopic=null">取消</button>
            </div>
        </div>
    </div>
</div>`,
    data: function() {
        return {
            isTopicModalShow: false,
            isDeleteTopicModalShow: false,
            topics: [],
            topic_name: '',
            ArticleData: ArticleData,
            selectedTopic: null
        }
    },
    async mounted() {
        this.topics = await this.$api.get('/me/topic')
    },
    methods: {
        showDeleteTopicModal: function(topic, $event) {
            this.selectedTopic = topic
            $event.preventDefault()
            $event.stopPropagation()
        },
        selectTopic: function(topic) {
            this.ArticleData.selectedTopic = topic
        },
        addTopic: async function() {
            const topic = await this.$api.post('/me/topic', {
                name: this.topic_name
            })
            this.topics.push(topic)
            this.isTopicModalShow = false
        },
        deleteTopic: async function(topic) {
            await this.$api.delete('/me/topic/' + topic.id)
            this.topics.splice(this.topics.indexOf(topic), 1)
            this.ArticleData.selectedTopic = null
            this.selectedTopic = null
            this.$message.info('删除主题成功')
        },
        updateTopicName: debounce(async function(topic) {
            const name = (topic.name || '').trim()
            if (!name.length) {
                return
            }
            await this.$api.post('/me/topic/' + topic.id, {
                name: name
            })
            this.$message.info('修改主题名成功')
        }, 1000)
    }
}