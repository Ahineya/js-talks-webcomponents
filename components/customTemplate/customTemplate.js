var importDoc = document.currentScript.ownerDocument;

var proto = Object.create(HTMLElement.prototype, {
    attachedCallback: {
        value: function() {
            var t = importDoc.querySelector('#customTemplate');
            var clone = importDoc.importNode(t.content, true);

            this.createShadowRoot().appendChild(clone);

            this.shadowRoot.querySelector('#btn')
                .addEventListener('click', function() {
                    alert('Clicked');
                });
        }
    }
});
document.registerElement('custom-template', {prototype: proto});