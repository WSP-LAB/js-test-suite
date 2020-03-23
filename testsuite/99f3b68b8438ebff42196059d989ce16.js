load("201224b0d1c296b45befd2285e95dd42.js");
// The WeakMap constructor creates an empty WeakMap by default.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

new WeakMap();
new WeakMap(undefined);
new WeakMap(null);

assertThrowsInstanceOf(() => WeakMap(), TypeError);
assertThrowsInstanceOf(() => WeakMap(undefined), TypeError);
assertThrowsInstanceOf(() => WeakMap(null), TypeError);
