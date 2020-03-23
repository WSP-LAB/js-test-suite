load("201224b0d1c296b45befd2285e95dd42.js");
// The WeakSet constructor creates an empty WeakSet by default.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

new WeakSet();
new WeakSet(undefined);
new WeakSet(null);

assertThrowsInstanceOf(() => WeakSet(), TypeError);
assertThrowsInstanceOf(() => WeakSet(undefined), TypeError);
assertThrowsInstanceOf(() => WeakSet(null), TypeError);
