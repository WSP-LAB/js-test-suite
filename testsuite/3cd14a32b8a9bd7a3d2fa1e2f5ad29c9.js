load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

/*
 * Throw a TypeError if the enumerable fields of the current descriptor and the
 * descriptor returned by the trap are the boolean negation of each other
 */
var target = {};
Object.defineProperty(target, 'foo', {
    configurable: false,
    enumerable: true
});
var caught = false;
assertThrowsInstanceOf(function () { 
    Object.getOwnPropertyDescriptor(new Proxy(target, {
        getOwnPropertyDescriptor: function (target, name) {
            return {
                configurable: false,
                enumerable: false
            };
        }
    }), 'foo');
}, TypeError);

var target = {};
Object.defineProperty(target, 'foo', {
    configurable: false,
    enumerable: false
});
var caught = false;
assertThrowsInstanceOf(function () { 
    Object.getOwnPropertyDescriptor(new Proxy(target, {
        getOwnPropertyDescriptor: function (target, name) {
            return {
                configurable: false,
                enumerable: true
            };
        }
    }), 'foo');
}, TypeError);
