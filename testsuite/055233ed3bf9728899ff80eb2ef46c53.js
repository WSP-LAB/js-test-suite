load("201224b0d1c296b45befd2285e95dd42.js");
function testSlowArrayLength()
{
  var counter = 0;
  var a = [];
  a[10000 - 1] = 0;
  for (var i = 0; i < a.length; i++)
    counter++;
  return counter;
}
assertEq(testSlowArrayLength(), 10000);
