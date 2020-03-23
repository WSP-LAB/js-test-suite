load("201224b0d1c296b45befd2285e95dd42.js");
function foo(x) {
  for (var i = 0x7ffffff0; i <= x; i++) {
    var y = (i % -2147483648);
  }
  return y + 5;
}
assertEq(foo(0x7fffffff), 0x7fffffff + 5);
