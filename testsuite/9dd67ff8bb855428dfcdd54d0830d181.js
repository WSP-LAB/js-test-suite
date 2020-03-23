load("201224b0d1c296b45befd2285e95dd42.js");
function testForVarInWith(foo, foo) {
  return eval("with ({}) { for (var x = 0; x < 5; x++); } (function() { return delete x; })");
}
f = testForVarInWith()();

