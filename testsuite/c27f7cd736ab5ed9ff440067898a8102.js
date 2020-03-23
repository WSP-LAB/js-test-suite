load("201224b0d1c296b45befd2285e95dd42.js");
function Foo() {
  u = 0;
}

var x = new Foo();
assertEq(Object.getPrototypeOf(x) === Foo.prototype, true);
assertEq(Object.getPrototypeOf(x) === Object.prototype, false);
