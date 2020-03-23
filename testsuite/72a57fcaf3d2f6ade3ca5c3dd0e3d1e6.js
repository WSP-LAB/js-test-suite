load("201224b0d1c296b45befd2285e95dd42.js");
called = 0;
Object.defineProperty(Object.prototype, 0, {set: function() { called++; }});
function testInit()
{
  var a = [];
  for (var i = 0; i < 5; i++)
    a[i] = 0;
}
for (var i = 0; i < 100; i++)
  testInit();
assertEq(called, 100);
