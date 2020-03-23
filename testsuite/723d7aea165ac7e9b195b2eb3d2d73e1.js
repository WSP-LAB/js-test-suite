load("201224b0d1c296b45befd2285e95dd42.js");
// Array.of returns an object in the target compartment, not the caller's compartment.
// This rules out implementations along the lines of (...args) => args.

var g = newGlobal();
var ga = g.Array.of(1, 2, 3);
assertEq(ga instanceof g.Array, true);

g.Array.of = Array.of;
var a = g.Array.of(1, 2, 3); // this-value is a wrapper of g.Array, which IsConstructor, so we call it
assertEq(ga instanceof g.Array, true);  // it produces a g.Array instance
