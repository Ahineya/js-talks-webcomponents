;(function() {
    console.log('wc-menuitem imported');

    var importDoc = document.currentScript.ownerDocument;

    var proto = Object.create(HTMLElement.prototype, {
        attachedCallback: {
            value: function() {
                var t = importDoc.querySelector('#wcmenuitem-template');
                var clone = importDoc.importNode(t.content, true);
                clone.querySelector('#menuitem').innerText = this.getAttribute('title') || 'none';

                this.onclick = function() {
                    console.log('menuitem ' + (this.getAttribute('title') || 'none') + ' clicked.');
                    //document.querySelector('wc-content').loadContent(this.getAttribute('title') || 'none');
                    var target = this.getAttribute('target');
                    document.querySelector('wc-content').loadContent( target );
                };

                this.createShadowRoot().appendChild(clone);
            }
        }
    });
    document.registerElement('wc-menuitem', {prototype: proto});
})();