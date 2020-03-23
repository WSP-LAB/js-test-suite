load("201224b0d1c296b45befd2285e95dd42.js");
function testLengthOnNonNativeProto()
{
  var o = {};
  o.__proto__ = [3];
  for (var j = 0; j < 5; j++)
    o[0];

  var o2 = {};
  o2.__proto__ = [];
  for (var j = 0; j < 5; j++)
    o2.length;

  function foo() { }
  foo.__proto__ = [];
  for (var j = 0; j < 5; j++)
    foo.length;

  return "no assertion";
}
assertEq(testLengthOnNonNativeProto(), "no assertion");
