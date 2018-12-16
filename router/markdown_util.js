const marked = require('../public/js/marked.min')
const hljs = require('../public/js/highlight.min')

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

module.exports = function(text) {
    return marked(text, {
        renderer: renderer,
        sanitize: true
    })
}