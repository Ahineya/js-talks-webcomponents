;(function() {
    console.log('wc-content imported');

    var importDoc = document.currentScript.ownerDocument;
    var shadow;

    var proto = Object.create(HTMLElement.prototype, {
        createdCallback: {
            value: function () {
                shadow = this.createShadowRoot();
            }
        }
    });

    proto.loadContent = function(content) {
        var cnt = document.createElement(content);
        shadow.innerHTML = "";
        shadow.appendChild(cnt);

        $.ajax({
            url: '/components/' + camelCase(content) + '/' + camelCase(content) + '.js',
            dataType: "text",
            success: function(data) {
                console.log('loaded js: ' + data);
            }
        });

        $.ajax({
            url: '/components/' + camelCase(content) + '/' + camelCase(content) + '.html',
            dataType: "text",
            success: function(data) {
                console.log('loaded html: ' + data);
            }
        });


    };

    document.registerElement('wc-content', {prototype: proto});

})();