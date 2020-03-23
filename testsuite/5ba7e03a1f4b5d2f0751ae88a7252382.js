load("201224b0d1c296b45befd2285e95dd42.js");
// Rest parameters are allowed in arrow functions.

var A = (...x) => x;
assertEq(A().toSource(), "[]");
assertEq("" + A(3, 4, 5), "3,4,5");
