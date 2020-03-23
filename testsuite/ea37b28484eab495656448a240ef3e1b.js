load("201224b0d1c296b45befd2285e95dd42.js");
let g = newGlobal();

let error = g.eval("Error()");

// This should not throw.
assertEq(typeof error.stack, "string");

g.error = Error();

// Nor should this.
assertEq(g.eval("typeof error.stack"), "string");
