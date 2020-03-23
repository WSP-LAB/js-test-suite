load("201224b0d1c296b45befd2285e95dd42.js");
// Block arrow functions don't return the last expression-statement value automatically.

var f = a => { a + 1; };
assertEq(f(0), undefined);
