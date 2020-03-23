load("201224b0d1c296b45befd2285e95dd42.js");
function testInvertNullAfterNegateNull()
{
  for (var i = 0; i < 5; i++) !null;
  for (var i = 0; i < 5; i++) -null;
  return "no assertion";
}
assertEq(testInvertNullAfterNegateNull(), "no assertion");
