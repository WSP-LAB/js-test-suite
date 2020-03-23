load("201224b0d1c296b45befd2285e95dd42.js");
// The Set constructor creates an empty Set by default.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var s = new Set();
assertEq(s.size, 0);
s = new Set(undefined);
assertEq(s.size, 0);
s = new Set(null);
assertEq(s.size, 0);

assertThrowsInstanceOf(() => Set(), TypeError);
assertThrowsInstanceOf(() => Set(undefined), TypeError);
assertThrowsInstanceOf(() => Set(null), TypeError);
