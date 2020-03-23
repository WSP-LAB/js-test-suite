load("201224b0d1c296b45befd2285e95dd42.js");
// Parameter default values work in arrow functions

var f = (a=0) => a + 1;
assertEq(f(), 1);
assertEq(f(50), 51);
