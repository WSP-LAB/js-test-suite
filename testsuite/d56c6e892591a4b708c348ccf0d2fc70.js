load("201224b0d1c296b45befd2285e95dd42.js");
function testWhileObjectOrNull()
{
  try
  {
    for (var i = 0; i < 3; i++)
    {
      var o = { p: { p: null } };
      while (o.p)
        o = o.p;
    }
    return "pass";
  }
  catch (e)
  {
    return "threw exception: " + e;
  }
}
assertEq(testWhileObjectOrNull(), "pass");
