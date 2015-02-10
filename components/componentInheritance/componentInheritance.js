(function() {

    var MBProto = Object.create(HTMLButtonElement.prototype, {
        createdCallback: {
            value: function() {
                this.innerHTML += '<b>Inheritance</b>';
                this.addEventListener('click', function() {
                    alert('Tracked click');
                });
            }
        }
    });

    var MegaButton = document.registerElement('component-inheritance', {
        prototype: MBProto,
        extends: 'button'
    });

    window.MegaButton = MegaButton;

})();