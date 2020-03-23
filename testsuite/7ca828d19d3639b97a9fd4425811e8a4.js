load("201224b0d1c296b45befd2285e95dd42.js");
load("dc4b20628140c803c89c741458a4c2d0.js");

function g(a, b, c) {
  this.value = [a, b, c];
  assertEq(Object.getPrototypeOf(this), g.prototype);
  assertEq(arguments.callee, g);
}

assertEqArray(new g(...[1, 2, 3]).value, [1, 2, 3]);
