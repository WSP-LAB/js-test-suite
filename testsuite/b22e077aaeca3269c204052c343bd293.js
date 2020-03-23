load("201224b0d1c296b45befd2285e95dd42.js");
function throwSomething() {
  throw "something";
}

try {
  // Use eval to force BINDNAME. Should throw "something" instead of the TDZ
  // ReferenceError.
  eval("x = throwSomething()");
  let x;
} catch (e) {
  assertEq(e, "something");
}

try {
  eval("x = 42");
  let x;
} catch (e) {
  assertEq(e instanceof ReferenceError, true);
}
