;(function() {

    var proto = Object.create(HTMLElement.prototype);

    proto.createdCallback = function() {
        console.log('created');
        var self = this;
        var i = 0;

        var btn = document.createElement('button');
        btn.innerHTML = 'Change Attribute';
        btn.onclick = function() {
            self.setAttribute('custom-attr', ++i);
        };
        this.appendChild(btn);
    };

    proto.attachedCallback = function() {
        console.log('attached');
    };

    proto.detachedCallback = function() {
        console.log('detached');
    };

    proto.attributeChangedCallback = function(attrName, oldVal, newVal) {
        console.log('attributeChanged: ' + attrName, 'Old value: ' + oldVal, 'New value: ', newVal);
    };

    document.registerElement('element-lifecycle', {prototype: proto});
})();