load("201224b0d1c296b45befd2285e95dd42.js");
// A closed Map iterator does not visit new entries added after a clear().

load("e2c808509c360663d6364e14c187fc8f.js");

var m = new Map();
var it = m[Symbol.iterator]();
assertIteratorDone(it, undefined);  // close the iterator
m.clear();
m.set("a", 1);
assertIteratorDone(it, undefined);  // iterator still closed
