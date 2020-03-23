load("201224b0d1c296b45befd2285e95dd42.js");
function bar(x, y) {
  return x + y;
}

function foo(x, y) {
  var a = 0;
  for (var i = 0; i < 1000; i++) {
    a += bar(x, y);
    a += bar(x, y);
    a += bar(x, y);
    a += bar(x, y);
  }
  return a;
}

var q = foo(0, 1);
assertEq(q, 4000);
