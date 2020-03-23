load("201224b0d1c296b45befd2285e95dd42.js");

eval("var x = 10; function foo() { return x; }");

assertEq(foo(), 10);
gc();
assertEq(foo(), 10);
