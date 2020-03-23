load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
  var a;
  var o = { valueOf: function () { x = 99; return x; } };
  var x = 2;
  return [x, o + x, x]
}
assertEq(f().join(", "), "2, 101, 99");

