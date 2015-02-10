;(function() {

    var proto = Object.create(HTMLElement.prototype);

    proto.createdCallback = function() {
        var shadow = this.createShadowRoot();

        var div = document.createElement('div');
        div.classList.add('italic');
        div.innerHTML = 'I am italic text. Or not?';

        shadow.appendChild(div);

        this.innerHTML = '<p class="italic">Italic</p>';
        shadow.appendChild(document.createElement('content'));

    };

    document.registerElement('using-shadow', {prototype: proto});
})();