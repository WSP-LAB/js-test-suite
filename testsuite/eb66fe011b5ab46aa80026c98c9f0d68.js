load("201224b0d1c296b45befd2285e95dd42.js");
var x = -false;
var y = -0;
assertEq(-x === x, true);
assertEq(-x === y, true);
assertEq(-y !== y, false);

assertEq(-x == x, true);
assertEq(-x == y, true);
assertEq(-y != y, false);
