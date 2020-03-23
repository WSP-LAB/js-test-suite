load("201224b0d1c296b45befd2285e95dd42.js");
// The Map constructor creates an empty Map by default.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var m = new Map();
assertEq(m.size, 0);
m = new Map(undefined);
assertEq(m.size, 0);
m = new Map(null);
assertEq(m.size, 0);

assertThrowsInstanceOf(() => Map(), TypeError);
assertThrowsInstanceOf(() => Map(undefined), TypeError);
assertThrowsInstanceOf(() => Map(null), TypeError);
