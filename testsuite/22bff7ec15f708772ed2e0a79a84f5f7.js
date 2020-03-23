load("201224b0d1c296b45befd2285e95dd42.js");
// new WeakMap(x) throws if x is not iterable (unless x is undefined).

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
var nonIterables = [true, 1, -0, 3.14, NaN, {}, Math, this];
for (let k of nonIterables)
    assertThrowsInstanceOf(function () { new WeakMap(k); }, TypeError);
