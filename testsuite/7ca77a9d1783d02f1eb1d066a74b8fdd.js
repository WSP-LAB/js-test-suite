load("201224b0d1c296b45befd2285e95dd42.js");
// If an array with an active iterator is lengthened, the iterator visits the new elements.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("e2c808509c360663d6364e14c187fc8f.js");

var arr = [0, 1];
var it = arr[Symbol.iterator]();
var ki = arr.keys();
var ei = arr.entries();
assertIteratorNext(it, 0);
assertIteratorNext(ki, 0);
assertIteratorNext(ei, [0, 0]);
assertIteratorNext(it, 1);
assertIteratorNext(ki, 1);
assertIteratorNext(ei, [1, 1]);
arr[2] = 2;
arr.length = 4;
assertIteratorNext(it, 2);
assertIteratorNext(ki, 2);
assertIteratorNext(ei, [2, 2]);
assertIteratorNext(it, undefined);
assertIteratorNext(ki, 3);
assertIteratorNext(ei, [3, undefined]);
assertIteratorDone(it, undefined);
assertIteratorDone(ki, undefined);
assertIteratorDone(ei, undefined);
