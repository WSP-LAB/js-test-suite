load("201224b0d1c296b45befd2285e95dd42.js");
// The typeof an arrow function is "function".

assertEq(typeof (() => 1), "function");
assertEq(typeof (a => { return a + 1; }), "function");
