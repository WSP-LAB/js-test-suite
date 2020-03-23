load("201224b0d1c296b45befd2285e95dd42.js");
function negZeroMinusNegZero()
{
  var x = -0.0;
  var y = -0.0;
  return +(x - y);
}

assertEq(1 / negZeroMinusNegZero(), Infinity);
assertEq(1 / negZeroMinusNegZero(), Infinity);
