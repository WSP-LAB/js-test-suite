load("201224b0d1c296b45befd2285e95dd42.js");

function foo(z)
{
  var x = 2;
  if (z) {
    x = 2.5;
  }
  var y = x * 10;
  assertEq(y, 20);
}
foo(false);
