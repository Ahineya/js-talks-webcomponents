;(function() {
    console.log('wc-content imported');

    var importDoc = document.currentScript.ownerDocument;
    var shadow;

    function load(content, type) {
        var tp = (type === 'javascript') ? 'js' : 'html';
        $.ajax({
            url: 'components/' + camelCase(content) + '/' + camelCase(content) + '.' + tp,
            dataType: "text",
            success: function(data) {
                var cnt = document.createElement('wc-highlighter');
                shadow.querySelector('.' + tp).innerHTML = '';
                shadow.querySelector('.' + tp).appendChild(cnt);

                if (tp === 'html') {
                    var replacedData = data.replace(/<script.*/, '');
                    var div = document.createElement('div');
                    div.innerHTML = replacedData;
                    shadow.querySelector('.component').appendChild(div);
                }

                cnt.show(data, type);

            }
        });
    }

    var proto = Object.create(HTMLElement.prototype, {
        createdCallback: {
            value: function () {
                shadow = this.createShadowRoot();
            }
        },
        attachedCallback: {
            value: function() {
                var t = importDoc.querySelector('#wccontent-template');
                var template = importDoc.importNode(t.content, true);
                shadow.appendChild(template);
                shadow.querySelector('.btn-fullscreen').addEventListener('click', function() {
                    if (this.innerHTML === '-') {
                        this.innerHTML = '+';
                        shadow.querySelector('.js').classList.remove('fullscreen');
                    } else {
                        this.innerHTML = '-';
                        shadow.querySelector('.js').classList.add('fullscreen');
                    }
                });
            }
        }
    });

    proto.loadContent = function(content) {

        load(content, 'javascript');
        load(content, 'html');

        shadow.querySelector('.component').innerHTML = '';
        shadow.querySelector('.component').appendChild(document.createElement(content));
    };

    document.registerElement('wc-content', {prototype: proto});

})();
