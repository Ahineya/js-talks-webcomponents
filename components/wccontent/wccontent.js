;(function() {
    console.log('wc-content imported');

    var importDoc = document.currentScript.ownerDocument;
    var shadow;

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
                $(shadow.querySelector('.btn-fullscreen')).click(function() {
                    $(shadow.querySelector('.js')).toggleClass('fullscreen');
                    $(this).html($(this).html() == '-' ? '+' : '-');
                });
            }
        }
    });

    proto.loadContent = function(content) {

        $.ajax({
            url: '/components/' + camelCase(content) + '/' + camelCase(content) + '.js',
            dataType: "text",
            success: function(data) {
                var cnt = document.createElement('wc-highlighter');
                shadow.querySelector('.js').innerHTML = '';
                shadow.querySelector('.js').appendChild(cnt);

                cnt.show(data, 'javascript');

            }
        });

        $.ajax({
            url: '/components/' + camelCase(content) + '/' + camelCase(content) + '.html',
            dataType: "text",
            success: function(data) {
                var cnt = document.createElement('wc-highlighter');
                shadow.querySelector('.html').innerHTML = '';
                shadow.querySelector('.html').appendChild(cnt);

                cnt.show(data, 'html');
            }
        });

        shadow.querySelector('.component').innerHTML = '';
        shadow.querySelector('.component').appendChild(document.createElement(content));

    };

    document.registerElement('wc-content', {prototype: proto});

})();