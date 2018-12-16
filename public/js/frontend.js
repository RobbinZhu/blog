(function() {
    var readyStates = ['interactive', 'loaded', 'complete']

    function addEventHandler(dom, name, callback, options) {
        dom.addEventListener(name, callback, options)
    }
    var domReady = function(callback) {
        readyStates.indexOf(document.readyState) >= 0 ? callback() : addEventHandler(document, 'DOMContentLoaded', callback)
    }

    function setImageSize(img, maxWidth) {
        var width, height
        if (typeof img.natureWidth == 'number') {
            width = img.natureWidth
            height = img.natureHeight
        } else {
            width = img.width
            height = img.height
        }
        if (width > maxWidth) {
            img.style.width = '100%'
            img.style.display = 'block'
        }
    }
    domReady(function() {
        var view = document.querySelector('.markdown-view')
        if (view) {
            var containerWidth = view.offsetWidth
            Array.prototype.slice.call(view.querySelectorAll('img'), 0)
                .forEach(function(img) {
                    addEventHandler(img, 'load', function() {
                        setImageSize(this, containerWidth)
                    })
                })
        }
    })
})()