load("201224b0d1c296b45befd2285e95dd42.js");
function testSwitchUndefined()
{
  var x = undefined;
  var y = 0;
  for (var i = 0; i < 5; i++)
  {
    switch (x)
    {
      default:
        y++;
    }
  }
  return y;
}
assertEq(testSwitchUndefined(), 5);
