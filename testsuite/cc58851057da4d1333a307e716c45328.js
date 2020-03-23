load("201224b0d1c296b45befd2285e95dd42.js");
function multiple(a) {
  if (a > 10)
    return 1;
  return 0;
}

function foo(x) {
  var a = 0;
  for (var i = 0; i < 100; i++)
    a += multiple(i);
  return a;
}

var q = foo([1,2,3,4,5]);
assertEq(q, 89);
