load("201224b0d1c296b45befd2285e95dd42.js");
function testCaseAbort()
{
  var four = "4";
  var r = 0;
  for (var i = 0; i < 5; i++)
  {
    switch (i)
    {
      case four: r += 1; break;
      default: r += 2; break;
    }
  }

  return "" + r;
}
assertEq(testCaseAbort(), "10");
