import ArticleData from './my-article-data.js'
import _ from './message.js'
// import marked from '../marked.min.js'
function getCursortPosition(textDom) {
    if (document.selection) {
        // IE Support
        textDom.focus()
        const selectRange = document.selection.createRange()
        selectRange.moveStart('character', -textDom.value.length)
        return selectRange.text.length
    } else if (textDom.selectionStart || textDom.selectionStart == '0') {
        // Firefox support
        return textDom.selectionStart
    }
}

function setCaretPosition(textDom, pos) {
    if (textDom.setSelectionRange) {
        // IE Support
        textDom.focus()
        textDom.setSelectionRange(pos, pos)
    } else if (textDom.createTextRange) {
        // Firefox support
        const range = textDom.createTextRange()
        range.collapse(true)
        range.moveEnd('character', pos)
        range.moveStart('character', pos)
        range.select()
    }
}

function getSelectText() {
    let userSelection, text
    if (window.getSelection) {
        // Firefox support
        userSelection = window.getSelection()
    } else if (document.selection) {
        // IE Support
        userSelection = document.selection.createRange()
    }
    if (!(text = userSelection.text)) {
        text = userSelection
    }
    return text
}

function insertAfterText(textDom, value) {
    if (document.selection) {
        // IE Support
        textDom.focus()
        const selectRange = document.selection.createRange()
        selectRange.text = value
        textDom.focus()
    } else if (textDom.selectionStart || textDom.selectionStart == '0') {
        // Firefox support
        const startPos = textDom.selectionStart
        const endPos = textDom.selectionEnd
        const scrollTop = textDom.scrollTop
        textDom.value = textDom.value.substring(0, startPos) + value + textDom.value.substring(endPos, textDom.value.length)
        textDom.focus()
        textDom.selectionStart = startPos + value.length
        textDom.selectionEnd = startPos + value.length
        textDom.scrollTop = scrollTop
    } else {
        textDom.value += value
        textDom.focus()
    }
}

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
const renderer = new marked.Renderer();
(function() {
    const oldCode = renderer.code
    renderer.code = function(text, level) {
        if (!level) {
            return oldCode.apply(this, arguments)
        }
        return '<pre class="hljs"><code class="hljs ' + (level || '') + '">' + hljs.highlightAuto(text.trim()).value + '</code></pre>'
    }
})();

(function() {
    const oldLink = renderer.link
    renderer.link = function() {
        const output = oldLink.apply(this, arguments)
        return '<a target="_blank"' + output.slice(2)
    }
})();

export default {
    template: `
<div v-show="ArticleData.selectedContent"class="editor-markdown" :class="{fixed: isFullPage, simple: !isPreviewShow || !isEditShow}">
    <div class="editor-markdown-header">
        <div class="editor-markdown-title">
            <input @input="updateArticleTitle(ArticleData.selectedArticle.id, ArticleData.selectedArticle.title)" v-if="ArticleData.selectedArticle" v-model="ArticleData.selectedArticle.title" type="text" placeholder="!!请在此输入文章标题标题!!!"/>
        </div>
        <div class="editor-markdown-util">
            <ul>
                <li><button @click="showAddImg()">插入图片</button></li>
                <li><button @click="undo()">撤销 ({{pushStack.length}})</button></li>
                <li><button @click="redo()">重做 ({{popStack.length}})</button></li>
                <li v-if="ArticleData.selectedArticle.status == 0"><button @click="publish()">发布</button></li>
                <li v-if="ArticleData.selectedArticle.status > 0"><button @click="cancelPublish()">取消发布</button></li>

                <li v-show="isPreviewShow" class="float-right"><button @click="isPreviewShow=false">隐藏预览</button></li>
                <li v-show="!isPreviewShow" class="float-right"><button @click="isPreviewShow=true">显示预览</button></li>
                <li v-show="isEditShow" class="float-right"><button @click="isEditShow=false">隐藏编辑</button></li>
                <li v-show="!isEditShow" class="float-right"><button @click="isEditShow=true">显示编辑</button></li>

                <li class="float-right" v-show="!isFullPage"><button @click="isFullPage=true">全屏</button></li>
                <li class="float-right" v-show="isFullPage"><button @click="isFullPage=false">取消全屏</button></li>
            </ul>
        </div>
    </div>
    <div class="editor-markdown-body">
        <div class="editor-markdown-input" v-show="isEditShow">
            <textarea @input="input" name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="editor-markdown-preview" v-show="isPreviewShow">
            <div v-html="sourceHTML"></div>
        </div>
    </div>
    <div class="modal-mask" :class="{show:isAddImgShow}">
        <div class="modal-content">
            <div class="modal-title">插入图片</div>
            <div class="modal-input">
                <label for="img">图片网址</label>
                <input @keydown.enter="addImg()" type="text" name="img" class="modal-input-text"/>
            </div>
            <div class="modal-operation">
                <button class="btn btn-primary" @click="addImg()">确定</button>
                <button class="btn btn-grey" @click="isAddImgShow=false">取消</button>
            </div>
        </div>
    </div>
</div>`,
    props: [],
    data: function() {
        return {
            ArticleData: ArticleData,
            // source: '',
            sourceHTML: '',
            pushStack: [],
            popStack: [],
            isPreviewShow: false,
            isEditShow: true,
            isFullPage: false,
            isAddImgShow: false,
            saveTimeout: null,
            prevText: ''
        }
    },
    watch: {
        'ArticleData.selectedArticle': async function(article, oldArticle) {
            if (oldArticle) {
                this.save()
            }
            if (article) {
                this.chooseArticle(article)
            }
        }
    },
    mounted() {
        this.chooseArticle(ArticleData.selectedArticle)
    },
    beforeDestroy: function() {
        clearTimeout(this.saveTimeout)
        this.save()
    },
    methods: {
        async chooseArticle(article) {
            this.ArticleData.selectedContent = await this.$api.get('/me/content/' + article.content_id)
            this.init()
        },
        init() {
            this.popStack.length = this.pushStack.length = 0
            this.textarea = this.$el.querySelector('textarea')
            this.imgInput = this.$el.querySelector('.modal-input-text')
            this.textarea.value = this.prevText = this.ArticleData.selectedContent.text
            this.handleSave()
            this.updatePreview()
        },
        handleSave() {
            clearTimeout(this.saveTimeout)
            this.saveTimeout = setTimeout(() => {
                this.save()
                this.handleSave()
            }, 1800000)
        },
        undo: debounce(function() {
            const pushStackLength = this.pushStack.length
            if (!pushStackLength) {
                return
            }
            this.popStack.push(this.pushStack.pop())
            this.update(pushStackLength > 1 ? this.pushStack[pushStackLength - 2] : '')
        }, 0),
        redo: debounce(function() {
            const popStackLength = this.popStack.length
            if (!popStackLength) {
                return
            }
            this.pushStack.push(this.popStack.pop())
            this.update(this.pushStack[this.pushStack.length - 1])
        }, 0),
        input: debounce(function() {
            this.popStack.length = 0
            this.pushStack.push(this.textarea.value)
            this.update(this.textarea.value)
        }, 300),
        update(source) {
            if (this.textarea.value !== source) {
                this.textarea.value = source
            }
            console.log('updated')
            this.updatePreview()
        },
        updatePreview: debounce(function() {
            this.sourceHTML = marked(this.textarea.value, {
                renderer: renderer,
                sanitize: true
            })
        }, 0),
        showAddImg() {
            this.isAddImgShow = true
        },
        addImg: debounce(function() {
            const url = (this.imgInput.value || '').trim()
            if (!url.length) {
                return
            }
            this.imgInput.value = ''
            this.isAddImgShow = false
            insertAfterText(this.textarea, '\n![image](' + url + ')\n')
            this.input()
        }, 300),
        updateArticleTitle: debounce(function(id, text) {
            const title = (text || '').trim()
            if (!title.length) {
                return
            }
            this.$api.post('/me/article/' + id, {
                title: title
            })
            this.$message.success('文章名称已更新')
        }, 1000),
        publish: async function() {
            await this.$api.post('/me/article/publish', {
                id: this.ArticleData.selectedArticle.id
            })
            this.$message.success('文章 ' + this.ArticleData.selectedArticle.title + ' 已发布')
            this.ArticleData.selectedArticle.status = 1
        },
        cancelPublish: async function() {
            await this.$api.post('/me/article/cancelPublish', {
                id: this.ArticleData.selectedArticle.id
            })
            this.$message.success('文章 ' + this.ArticleData.selectedArticle.title + ' 已取消发布')
            this.ArticleData.selectedArticle.status = 0
        },
        save: function() {
            const currentText = this.textarea.value
            if (currentText == this.prevText) {
                return
            }
            this.$api.post('/me/content/' + this.ArticleData.selectedContent.id, {
                    text: currentText
                })
                // this.$message.success('文章已保存', 3000)
            this.prevText = currentText
        }
    }
}