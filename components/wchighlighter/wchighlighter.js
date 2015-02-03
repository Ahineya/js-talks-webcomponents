(function() {
    console.log('wc-highlighter imported');

    var importDoc = document.currentScript.ownerDocument;
    var shadow;

    var proto = Object.create(HTMLElement.prototype, {
        createdCallback: {
            value: function () {
                shadow = this.createShadowRoot();
            }
        }
    });

    proto.show = function(content, type) {
        var pre = document.createElement('pre');
        var code = document.createElement('code');
        var style = document.createElement('style');
        style.setAttribute('type','text/css');
        style.innerText = '@import "' + '/bower_components/highlightjs/styles/monokai_sublime.css' + '";';
        shadow.appendChild(style);

        code.innerText = content;
        code.className = type || 'javascript';
        pre.appendChild(code);
        shadow.appendChild(style);
        shadow.appendChild(pre);

        hljs.highlightBlock(code);

        pre.style.margin = '0';
        pre.style.width = '100%';
        pre.style.float = 'left';

    };

    document.registerElement('wc-highlighter', {prototype: proto});

})();