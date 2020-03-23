load("201224b0d1c296b45befd2285e95dd42.js");
// A Set iterator continues to visit entries added after a clear().

load("e2c808509c360663d6364e14c187fc8f.js");

var s = new Set(["a"]);
var it = s[Symbol.iterator]();
assertIteratorNext(it, "a");
s.clear();
s.add("b");
assertIteratorNext(it, "b");
assertIteratorDone(it, undefined);
