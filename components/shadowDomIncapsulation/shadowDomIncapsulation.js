;(function() {
    var importDoc = document.currentScript.ownerDocument;
    var proto = Object.create(HTMLElement.prototype);

    proto.createdCallback = function() {
        var shadow = this.createShadowRoot();

        var p = document.createElement('p');
        p.innerText = 'Hello!';

        shadow.appendChild(p);

    };

    document.registerElement('shadow-dom-incapsulation', {prototype: proto});

})();