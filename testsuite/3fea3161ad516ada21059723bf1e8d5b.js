load("201224b0d1c296b45befd2285e95dd42.js");
// WeakMap constructor should throw when key is nonnull.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var v1 = 42;

var primitive = 10;
assertThrowsInstanceOf(() => new WeakMap([[primitive, v1]]), TypeError);

var empty_array = [];
assertThrowsInstanceOf(() => new WeakMap([empty_array]), TypeError);
