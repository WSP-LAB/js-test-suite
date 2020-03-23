load("201224b0d1c296b45befd2285e95dd42.js");
// Each Map has its own size.

var m1 = new Map(), m2 = new Map();
m1.set("x", 3);
assertEq(m1.size, 1);
assertEq(m2.size, 0);
