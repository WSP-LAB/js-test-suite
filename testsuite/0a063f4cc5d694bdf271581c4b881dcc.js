load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

/*
 * Throw a TypeError if the trap reports an existing own property as
 * non-existent on a non-extensible object
 */
var target = {};
Object.defineProperty(target, 'foo', {
    configurable: true
});
Object.preventExtensions(target);

var handler = { has: () => false };
for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy])
    assertThrowsInstanceOf(function () { 'foo' in p }, TypeError);
