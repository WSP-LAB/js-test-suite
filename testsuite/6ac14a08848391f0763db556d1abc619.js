load("201224b0d1c296b45befd2285e95dd42.js");
// Clearing a Map doesn't affect expando properties.

var m = new Map();
m.x = 3;
m.clear();
assertEq(m.x, 3);
