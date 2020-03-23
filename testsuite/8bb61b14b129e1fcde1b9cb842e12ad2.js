load("201224b0d1c296b45befd2285e95dd42.js");
function testFunctionIdentityChange()
{
  function a() {}
  function b() {}

  var o = { a: a, b: b };

  for (var prop in o)
  {
    for (var i = 0; i < 1000; i++)
      o[prop]();
  }

  return true;
}
assertEq(testFunctionIdentityChange(), true);
