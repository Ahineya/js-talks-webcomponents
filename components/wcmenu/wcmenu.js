;(function() {
    console.log('wc-menu imported');

    var importDoc = document.currentScript.ownerDocument;
    var menuitems = [];

    var proto = Object.create(HTMLElement.prototype, {
        createdCallback: {
            value: function() {
                var t = importDoc.querySelector('#wcmenu-template');
                var clone = importDoc.importNode(t.content, true);
                var itemsWrapper = clone.querySelector('#items');
                var items = JSON.parse(this.getAttribute('menu-items') || []);

                items.forEach(function(item) {
                    var elem = document.createElement('wc-menuitem');
                    elem.setAttribute('title', item.name);
                    elem.setAttribute('target', item.element);
                    elem.addEventListener('click', function() {
                        for (var i = 0; i<menuitems.length; i++) {
                            menuitems[i].classList.remove('active');
                        }
                        this.classList.add('active');
                    });
                    menuitems.push(elem);
                    itemsWrapper.appendChild(elem);
                });

                this.createShadowRoot().appendChild(clone);
            }
        }
    });
    document.registerElement('wc-menu', {prototype: proto});

})();