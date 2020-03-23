load("201224b0d1c296b45befd2285e95dd42.js");
// A Set iterator does not iterate over new entries added after it throws StopIteration.

load("e2c808509c360663d6364e14c187fc8f.js");

var set = new Set();
var iter0 = set[Symbol.iterator](), iter1 = set[Symbol.iterator]();
assertIteratorDone(iter0, undefined);  // closes iter0
set.add("x");
assertIteratorDone(iter0, undefined);  // already closed
assertIteratorNext(iter1, "x");  // was not yet closed
