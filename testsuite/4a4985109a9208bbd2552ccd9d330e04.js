load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

/*
 * Throw a TypeError if the trap does not report undefined for a non-configurable
 * accessor property that does not have a getter
 */
var target = {};
Object.defineProperty(target, 'foo', {
    set: function (value) {},
    configurable: false
});
var handler = { get: function (target, name, receiver) { return 'baz'; } };
for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy])
    assertThrowsInstanceOf(function () { p['foo'] }, TypeError);
