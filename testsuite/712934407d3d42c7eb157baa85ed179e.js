load("201224b0d1c296b45befd2285e95dd42.js");
function xprop()
{
  a = 0;
  for (var i = 0; i < 20; i++)
    a += 7;
  return a;
}
assertEq(xprop(), 140);
