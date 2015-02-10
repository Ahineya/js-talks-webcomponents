;(function() {
    var importDoc = document.currentScript.ownerDocument;
    var unresolvedProto = Object.create(HTMLElement.prototype);
    unresolvedProto.createdCallback = function() {
        var btn = document.createElement('button');
        btn.innerHTML = 'Register x-unresolved';

        btn.addEventListener('click', function() {
            document.registerElement('x-unresolved', {prototype: Object.create(HTMLElement.prototype) });
            document.querySelector('wc-content')
                .shadowRoot.querySelector('x-unresolved')
                .textContent = "X-unresolved is registered!";
        }.bind(this));

        this.appendChild(btn);

    };

    document.registerElement('styling-unresolved', {prototype: unresolvedProto});

})();