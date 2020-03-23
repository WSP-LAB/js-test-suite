load("201224b0d1c296b45befd2285e95dd42.js");
// A Map iterator continues to visit entries added after a clear().

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("e2c808509c360663d6364e14c187fc8f.js");

var m = new Map([["a", 1]]);
var it = m[Symbol.iterator]();
assertIteratorNext(it, ["a", 1]);
m.clear();
m.set("b", 2);
assertIteratorNext(it, ["b", 2]);
assertIteratorDone(it, undefined);
