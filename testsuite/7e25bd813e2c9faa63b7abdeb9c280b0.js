load("201224b0d1c296b45befd2285e95dd42.js");
// A closed Set iterator does not visit new entries added after a clear().

load("e2c808509c360663d6364e14c187fc8f.js");

var s = new Set();
var it = s[Symbol.iterator]();
assertIteratorDone(it, undefined);  // close the iterator
s.clear();
s.add("a");
assertIteratorDone(it, undefined);
