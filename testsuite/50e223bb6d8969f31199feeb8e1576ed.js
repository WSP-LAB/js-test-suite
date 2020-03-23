load("201224b0d1c296b45befd2285e95dd42.js");

x = 30;
function foo() {
  assertEq(x, 30);
  delete x;
  y = 20;
  Object.defineProperty(this, 'x', {value:10});
  assertEq(x, 10);
}
foo();
