load("201224b0d1c296b45befd2285e95dd42.js");
function newArrayTest()
{
  var a = [];
  for (var i = 0; i < 10; i++)
    a[i] = new Array();
  return a.map(x => x.length).toString();
}
assertEq(newArrayTest(), "0,0,0,0,0,0,0,0,0,0");
