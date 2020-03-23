load("201224b0d1c296b45befd2285e95dd42.js");
// The prototype of an arrow function is Function.prototype.

assertEq(Object.getPrototypeOf(a => a), Function.prototype);
assertEq(Object.getPrototypeOf(() => {}), Function.prototype);
