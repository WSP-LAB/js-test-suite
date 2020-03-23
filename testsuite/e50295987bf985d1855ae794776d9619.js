load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

/*
 * Throw a TypeError if the trap defines a new property on a non-extensible
 * object
 */
var target = {};
Object.preventExtensions(target);

var handler = { defineProperty: function (target, name, desc) { return true; } };

for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy]) {
    assertThrowsInstanceOf(function () {
        Object.defineProperty(p, 'foo', { configurable: true });
    }, TypeError);
}
