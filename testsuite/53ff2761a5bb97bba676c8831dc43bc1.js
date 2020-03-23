load("201224b0d1c296b45befd2285e95dd42.js");
function testObjectLength()
{
  var counter = 0;
  var a = {};
  a.length = 10000;
  for (var i = 0; i < a.length; i++)
    counter++;
  return counter;
}
assertEq(testObjectLength(), 10000);
