load("201224b0d1c296b45befd2285e95dd42.js");
function stringSplitIntoArrayTest()
{
  var s = "a,b"
  var a = [];
  for (var i = 0; i < 10; ++i)
    a[i] = s.split(",");
  return a.join();
}
assertEq(stringSplitIntoArrayTest(), "a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b");
