load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:TypeError
var otherGlobal = newGlobal();
var proxy = new (otherGlobal.Proxy)({}, {});
Int8Array.set(proxy);
