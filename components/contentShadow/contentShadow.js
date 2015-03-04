;(function() {
    var importDoc = document.currentScript.ownerDocument;
    var proto = Object.create(HTMLElement.prototype);

    proto.createdCallback = function() {
        var shadow1 = this.createShadowRoot();
        var shadow2 = this.createShadowRoot();

        shadow1.innerHTML = '<div>Shadow 1</div>';
        shadow2.innerHTML = '<div>Shadow 2</div>';

        if (this.getAttribute('x-content') === '1') {
            shadow1.innerHTML = '<div>Shadow 1</div><content></content>';
        }

        if (this.getAttribute('x-shadow') === '1') {
            shadow2.innerHTML = '<div>Shadow 2</div><shadow></shadow>';
        }



    };

    document.registerElement('content-shadow', {prototype: proto});

})();
