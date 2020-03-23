load("201224b0d1c296b45befd2285e95dd42.js");
function adder(x, y) {
  return Math.floor(x + y);
}

function foo(x) {
  for (var i = 0; i < 100; i++) {
    var a = adder(x, i);
  }
  return a;
}

var q = foo(0x7ffffff0 + .5);
assertEq(q, 2147483731);
