load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

// Throw a TypeError if the trap reports an extensible object as non-extensible

var handler = { preventExtensions: () => true };
for (let p of [new Proxy({}, handler), Proxy.revocable({}, handler).proxy])
    assertThrowsInstanceOf(() => Object.preventExtensions(p), TypeError);
