load("201224b0d1c296b45befd2285e95dd42.js");
// (a) => expr

var f = (a) => 2 * a;  // parens are allowed
assertEq(f(12), 24);
var g = (a, b) => a + b;
assertEq([1, 2, 3, 4, 5].reduce((a, b) => a + b), 15);
