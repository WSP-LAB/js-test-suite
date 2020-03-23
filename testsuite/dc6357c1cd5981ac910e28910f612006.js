load("201224b0d1c296b45befd2285e95dd42.js");
// Set methods work when arguments are omitted.

var s = new Set;
assertEq(s.has(), false);
assertEq(s.delete(), false);
assertEq(s.has(), false);
assertEq(s.add(), s);
assertEq(s.has(), true);
assertEq(s.delete(), true);
assertEq(s.has(), false);
