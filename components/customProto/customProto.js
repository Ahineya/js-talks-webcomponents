;(function() {
    console.log('custom-proto imported');

    var importDoc = document.currentScript.ownerDocument;

    var proto = Object.create(HTMLElement.prototype);
    proto.customProperty = 2;
    proto.customMethod = function() {
        alert('custom method here!');
    };


    document.registerElement('custom-proto', {prototype: proto});

})();