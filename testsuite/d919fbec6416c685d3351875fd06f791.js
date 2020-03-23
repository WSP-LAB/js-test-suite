load("201224b0d1c296b45befd2285e95dd42.js");
// Array iterators reflect changes to elements of the underlying array.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("e2c808509c360663d6364e14c187fc8f.js");

var arr = [0, 1, 2];
var it = arr[Symbol.iterator]();
arr[0] = 1000;
arr[2] = 2000;
assertIteratorNext(it, 1000);
assertIteratorNext(it, 1);
assertIteratorNext(it, 2000);
assertIteratorDone(it, undefined);

// test that .keys() and .entries() have the same behaviour

arr = [0, 1, 2];
var ki = arr.keys();
var ei = arr.entries();
arr[0] = 1000;
arr[2] = 2000;
assertIteratorNext(ki, 0);
assertIteratorNext(ei, [0, 1000]);
assertIteratorNext(ki, 1);
assertIteratorNext(ei, [1, 1]);
assertIteratorNext(ki, 2);
assertIteratorNext(ei, [2, 2000]);
assertIteratorDone(ki, undefined);
assertIteratorDone(ei, undefined);
