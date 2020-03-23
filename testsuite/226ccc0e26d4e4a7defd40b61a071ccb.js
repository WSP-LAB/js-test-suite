load("201224b0d1c296b45befd2285e95dd42.js");
function testObjectOrderedCmp2()
{
  var a = new Array(5);
  for(var i=0;i<5;++i) a[i] = ("" <= null);
  return a.join(",");
}
assertEq(testObjectOrderedCmp2(), "true,true,true,true,true");
