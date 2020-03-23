load("201224b0d1c296b45befd2285e95dd42.js");
function f(x, y) { return x || Math.fround(y); }
assertEq(f(0, 0), 0);
assertEq(f(0xfffffff, 0), 0xfffffff);
