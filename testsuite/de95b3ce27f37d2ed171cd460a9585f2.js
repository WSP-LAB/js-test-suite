load("201224b0d1c296b45befd2285e95dd42.js");

function foo(x) {
  Object.seal(x);
  x[3] = 4;
  assertEq("" + x, "1,2,3");
}
foo([1,2,3]);
