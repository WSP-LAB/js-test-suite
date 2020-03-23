load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

/*
 * Throw a TypeError if the current descriptor is non-configurable and the trap
 * returns a configurable descriptor
 */
var target = {};
Object.defineProperty(target, 'foo', {
    configurable: false
});
assertThrowsInstanceOf(function () {
    Object.getOwnPropertyDescriptor(Proxy(target, {
        getOwnPropertyDescriptor: function (target, name) {
            return {
                configurable: true
            };
        }
    }), 'foo');
}, TypeError);
