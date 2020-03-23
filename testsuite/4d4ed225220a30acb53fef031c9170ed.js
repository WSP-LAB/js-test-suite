load("201224b0d1c296b45befd2285e95dd42.js");
globalName = 907;
function name()
{
  var a = 0;
  for (var i = 0; i < 100; i++)
    a = globalName;
  return a;
}
assertEq(name(), 907);
