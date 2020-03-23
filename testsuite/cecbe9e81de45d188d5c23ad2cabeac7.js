load("201224b0d1c296b45befd2285e95dd42.js");
// register allocation involving doubles.

function foo(a,b) {
  var c;
  if (a < b) {
    c = a + 1;
  } else {
    c = 0.5;
  }
  return c;
}
assertEq(foo(0, 1), 1);
