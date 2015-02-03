(function() {
    var SimpleElement = Object.create(HTMLElement.prototype);

    SimpleElement.createdCallback = function() {
        this.innerHTML = "<b>I'm simple element!</b>";
    };

    document.registerElement('simple-element', {prototype: SimpleElement});
})();