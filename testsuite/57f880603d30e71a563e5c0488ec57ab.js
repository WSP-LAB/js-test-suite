load("201224b0d1c296b45befd2285e95dd42.js");

function foo() {
  var x = {};
  x.__proto__ = function() { return 0 }
  return x;
}
var a = foo();
var b = foo();
assertEq(a.__proto__ === b.__proto__, false);
