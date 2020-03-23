load("201224b0d1c296b45befd2285e95dd42.js");
// If an array is truncated to the left of an iterator it, it.next() returns { done: true }.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("e2c808509c360663d6364e14c187fc8f.js");

var arr = [0, 1, 2];
var it = arr[Symbol.iterator]();
var ki = arr.keys();
var ei = arr.entries();

assertIteratorNext(it, 0);
assertIteratorNext(it, 1);
assertIteratorNext(ki, 0);
assertIteratorNext(ki, 1);
assertIteratorNext(ei, [0, 0]);
assertIteratorNext(ei, [1, 1]);
arr.length = 1;
assertIteratorDone(it, undefined);
assertIteratorDone(ki, undefined);
assertIteratorDone(ei, undefined);
