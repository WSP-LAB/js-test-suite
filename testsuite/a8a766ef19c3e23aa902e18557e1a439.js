load("201224b0d1c296b45befd2285e95dd42.js");
function foo(x, y) {
  if (y < 0) {}
  return x * 1000;
}
function bar(x, y) {
  while (false) {}
  assertEq(foo(x, false), 10500);
  assertEq(foo(y, false), 11000);
}
bar(10.5, 11);
