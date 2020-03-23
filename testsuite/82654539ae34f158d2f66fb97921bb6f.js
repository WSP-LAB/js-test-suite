load("201224b0d1c296b45befd2285e95dd42.js");
function testAddNull()
{
  var rv;
  for (var x = 0; x < 9; ++x)
    rv = null + [,,];
  return rv;
}
assertEq(testAddNull(), "null,");
