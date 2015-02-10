(function() {

    var parentObj = new window.MegaButton();
    var parentProto = Object.getPrototypeOf(parentObj);

    var EMBProto = Object.create(parentProto, {
        attachedCallback: {
            value: function() {
                this.innerHTML += "Extended ";
                /*parentObj.createdCallback.call(this);*/
                this.addEventListener('click', function() {
                    console.log(this instanceof window.MegaButton);
                    console.log(this instanceof ExtendedMegaButton);
                });
            }
        }
    });

    var ExtendedMegaButton = document.registerElement('extended-component-inheritance', {
        prototype: EMBProto,
        extends: 'button'
    });

})();