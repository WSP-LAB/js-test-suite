load("201224b0d1c296b45befd2285e95dd42.js");
// Bug 1133294 - Object.getOwnPropertyDescriptor should never return an incomplete descriptor.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var p = new Proxy({}, {
    getOwnPropertyDescriptor() { return {configurable: true}; }
});
var desc = Object.getOwnPropertyDescriptor(p, "x");
assertDeepEq(desc, {
    value: undefined,
    writable: false,
    enumerable: false,
    configurable: true
});
