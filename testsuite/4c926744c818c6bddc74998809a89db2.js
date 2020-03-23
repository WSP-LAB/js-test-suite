load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

/*
 * Throw a TypeError if the trap reports a non-configurable property as
 * non-existent
 */
var target = {};
Object.defineProperty(target, 'foo', {
    configurable: false
});

var handler = { getOwnPropertyDescriptor: () => undefined };
for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy])
    assertThrowsInstanceOf(() => Object.getOwnPropertyDescriptor(p, 'foo'), TypeError);
