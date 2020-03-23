load("201224b0d1c296b45befd2285e95dd42.js");
function f(v, expected) {
  assertEq(v.prop, expected);
};

class SubArrayA extends Array {
}
class SubArrayB extends Array {
}
SubArrayA.prototype.prop = "A";
SubArrayB.prototype.prop = "B";

var a = new SubArrayA();
var b = new SubArrayB();
for (let i = 0; i < 10; i++) {
  f(a, "A");
  f(b, "B");
}
