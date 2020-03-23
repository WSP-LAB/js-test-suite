load("201224b0d1c296b45befd2285e95dd42.js");
// A map iterator can cope with removing the next entry, then the current entry.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("e2c808509c360663d6364e14c187fc8f.js");

var map = new Map([['a', 0], ['b', 1], ['c', 2], ['d', 3]]);
var iter = map[Symbol.iterator]();
assertIteratorNext(iter, ['a', 0]);
assertIteratorNext(iter, ['b', 1]);
map.delete('c');
map.delete('b');
assertIteratorNext(iter, ['d', 3]);
assertIteratorDone(iter, undefined);
