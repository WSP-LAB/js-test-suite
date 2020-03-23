load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

// Throw a TypeError if the trap sets a non-writable, non-configurable property
for (var key of ['foo', Symbol.for('quux')]) {
    var target = {};
    Object.defineProperty(target, key, {
        value: 'bar',
        writable: false,
        configurable: false
    });
    var handler = { set: () => true };
    for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy])
        assertThrowsInstanceOf(() => p[key] = 'baz', TypeError);
}
