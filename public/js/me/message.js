const Container = Vue.extend({
    template: `<div class="toast-container">
<transition-group name="toast" tag="div">
    <div class="toast" :key="message.id" :class="message.type" v-for="message in messages">
        <div v-html="message.text"></div>
        <span class="toast-close" @click="remove(message)">
            &#xd7;
        </span>
    </div>
</transition-group>
    </div>`,
    components: {},
    data: function() {
        return {
            messages: []
        }
    },
    mounted: function() {
        document.body.appendChild(this.$el)
    },
    methods: {
        remove: function(toast) {
            this.messages.splice(this.messages.indexOf(toast), 1)
        }
    }
})
let container

function addMessage(type, text, timeout) {
    if (!container) {
        container = new Container
        container.$mount()
    }
    const message = {
        type: type,
        text: text,
        id: container.messages.length
    }
    container.messages.push(message)
    setTimeout(function() {
        container.remove(message)
    }, timeout || 5000)
}

const MessageUtil = {}

const types = ['success', 'warning', 'info', 'error']
types.forEach(function(type) {
    MessageUtil[type] = function(text) {
        addMessage(type, text)
    }
})

Vue.prototype.$message = MessageUtil
export default MessageUtil