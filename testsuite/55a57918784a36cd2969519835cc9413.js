load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

/*
 * Throw a TypeError if both the current descriptor and the descriptor returned
 * by the trap are accessor descriptors, the current descriptor is
 * non-configurable, and the descriptor returned by the trap has a different
 * setter.
 */
var target = {};
Object.defineProperty(target, 'foo', {
    set: function (value) {i
        target.foo = 'bar';
    },
    configurable: false
});
var caught = false;
assertThrowsInstanceOf(function () { 
    Object.getOwnPropertyDescriptor(new Proxy(target, {
        getOwnPropertyDescriptor: function (target, name) {
            return {
                set: function (value) {
                    target.foo = 'baz';
                },
                configurable: false
            };
        }
    }), 'foo');
}, TypeError);
