(function() {
    var importDoc = document.currentScript.ownerDocument;

    var proto = Object.create(HTMLElement.prototype);
    proto.customProperty = 2;
    proto.customMethod = function() {
        return this;
    };

    proto.createdCallback = function() {
        console.log('created');
        this.onclick = function() {
            console.log(this.customProperty);
            console.log(this.customMethod());
        };
        this.innerText = 'Custom element with prototype';
    };

    proto.attachedCallback = function() {
        console.log('attached');
        this.innerText = 'Custom element with prototype attached';
    };

    document.registerElement('custom-proto', {prototype: proto});

})();