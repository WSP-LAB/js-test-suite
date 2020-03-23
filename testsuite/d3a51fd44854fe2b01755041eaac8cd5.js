load("201224b0d1c296b45befd2285e95dd42.js");
function testDoubleComparison()
{
  for (var i = 0; i < 500000; ++i)
  {
    switch (1 / 0)
    {
      case Infinity:
    }
  }

  return "finished";
}
assertEq(testDoubleComparison(), "finished");
