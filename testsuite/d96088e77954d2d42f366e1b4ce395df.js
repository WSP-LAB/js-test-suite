load("201224b0d1c296b45befd2285e95dd42.js");
/* Don't crash. */
function foo(y) {
  var x = y;
  if (x != x)
    return true;
  return false;
}
assertEq(foo("three"), false);
assertEq(foo(NaN), true);
