;(function() {
    var importDoc = document.currentScript.ownerDocument;
    var proto = Object.create(HTMLElement.prototype);

    proto.createdCallback = function() {
        var shadow = this.createShadowRoot();

        var p = document.createElement('p');
        p.innerText = 'Hello!';

        shadow.innerHTML = '<style>' +
        ':host { text-transform: uppercase; }' +
        'p:hover { text-decoration: underline; cursor: pointer; }'
        '</style>';

        shadow.appendChild(p);
        p = document.createElement('p');
        p.classList.add('styled');
        p.innerText = 'World';
        shadow.appendChild(p);

        this.addEventListener('click', function() {
            var elem = document.querySelector('body /deep/ .styled');
            console.log(elem);

            elem = document.querySelector('wc-content').shadowRoot
                           .querySelector('shadow-styling').shadowRoot
                           .querySelector('p.styled');
            console.log(elem);

        });

    };

    document.registerElement('shadow-styling', {prototype: proto});

})();