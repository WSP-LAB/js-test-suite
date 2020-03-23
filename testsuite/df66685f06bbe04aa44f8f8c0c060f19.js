load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

// Throw a TypeError if the object refuses to be made non-extensible
var handler = { preventExtensions: () => false };
for (let p of [new Proxy({}, handler), Proxy.revocable({}, handler).proxy])
    assertThrowsInstanceOf(() => Object.preventExtensions(p), TypeError);
