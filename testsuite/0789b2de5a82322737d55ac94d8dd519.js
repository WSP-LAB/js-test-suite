load("201224b0d1c296b45befd2285e95dd42.js");
function testOwnPropertyWithInOperator()
{
  var o = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 };
  var a = [];
  for (var i = 0; i < 7; i++)
    a.push(i in o);
  return a.join(",");
}
assertEq(testOwnPropertyWithInOperator(), "true,true,true,true,true,true,true");
