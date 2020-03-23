load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

function f1(a=g()) {
  function g() {
  }
}
assertThrowsInstanceOf(f1, ReferenceError);

function f2(a=g()) {
  function g() {
    return 43;
  }
  assertEq(a, 42);
}
f2(42);
