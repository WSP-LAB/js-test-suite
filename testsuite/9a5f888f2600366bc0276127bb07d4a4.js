load("201224b0d1c296b45befd2285e95dd42.js");
function foo(x, n) {
  var a = 0;
  for (var i = 0; i < n; i++)
    a += x[3];
  return a;
}

var a = foo([1,2,3,4], 100);
assertEq(a, 400);

var b = foo([1,2], 100);
assertEq(b, NaN);
