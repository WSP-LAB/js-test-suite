load("201224b0d1c296b45befd2285e95dd42.js");
// Clearing a Set doesn't affect expando properties.

var s = new Set();
s.x = 3;
s.clear();
assertEq(s.x, 3);
