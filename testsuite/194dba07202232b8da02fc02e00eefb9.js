load("201224b0d1c296b45befd2285e95dd42.js");
// Test that getname caches correctly handle typeof for missing names.
function f() { for (i = 0; i < 2000; ++i) { var k = typeof nosuchvar; } return k; }

assertEq(f(), "undefined");
this.nosuchvar = 5;
assertEq(f(), "number");
