load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

/*
 * Throw a TypeError if the trap sets a non-configurable accessor property that
 * doest not have a setter
 */
var target = {};
Object.defineProperty(target, 'foo', {
    get: function () {
        return 'bar'
    },
    configurable: false
});

var handler = { set: () => true };
for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy])
    assertThrowsInstanceOf(() => p['foo'] = 'baz', TypeError);
