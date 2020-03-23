load("201224b0d1c296b45befd2285e95dd42.js");
// A set iterator can cope with removing the next entry, then the current entry.

load("e2c808509c360663d6364e14c187fc8f.js");

var set = new Set("abcd");
var iter = set[Symbol.iterator]();
assertIteratorNext(iter, "a");
assertIteratorNext(iter, "b");
set.delete("c");
set.delete("b");
assertIteratorNext(iter, "d");
assertIteratorDone(iter, undefined);
