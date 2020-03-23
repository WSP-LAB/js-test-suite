load("201224b0d1c296b45befd2285e95dd42.js");
function foo(x) {
  for (var i = 0x7ffffff0; i <= x; i++) {
    var y = i;
  }
  return y;
}
assertEq(foo(0x7fffffff), 0x7fffffff);
