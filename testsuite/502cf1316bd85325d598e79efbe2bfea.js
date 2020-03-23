load("201224b0d1c296b45befd2285e95dd42.js");
function stringSplitTest()
{
  var s = "a,b"
  var a = null;
  for (var i = 0; i < 10; ++i)
    a = s.split(",");
  return a.join();
}
assertEq(stringSplitTest(), "a,b");
