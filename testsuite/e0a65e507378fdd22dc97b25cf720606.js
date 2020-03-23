load("201224b0d1c296b45befd2285e95dd42.js");

function foo(a, b, c) {
  var res = 0;
  for (var b = 0; b < c; b++)
    res += a[b];
  return res;
}
assertEq(foo([1,2,3], 0, 10), NaN);
