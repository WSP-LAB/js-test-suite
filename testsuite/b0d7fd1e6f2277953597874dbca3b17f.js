load("201224b0d1c296b45befd2285e95dd42.js");
// Iterators from another compartment work with both their own .next method
// with the other compartment's .next method.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("e2c808509c360663d6364e14c187fc8f.js");

var g = newGlobal();
g.eval(`var it = [1, 2][Symbol.iterator]();`);
assertIteratorNext(g.it, 1);
assertDeepEq([][Symbol.iterator]().next.call(g.it), { value: 2, done: false })
