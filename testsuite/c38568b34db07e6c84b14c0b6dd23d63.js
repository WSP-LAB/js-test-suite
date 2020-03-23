load("201224b0d1c296b45befd2285e95dd42.js");
// evalInFrame with non-syntactic scopes.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("00e0aa336e6c8b65ee1f164279cff5fc.js");

evalReturningScope(`
  var x = 42;
  assertEq(evalInFrame(0, "x"), 42);
`);
