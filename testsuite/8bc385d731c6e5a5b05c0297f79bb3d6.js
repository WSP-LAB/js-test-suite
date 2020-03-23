load("201224b0d1c296b45befd2285e95dd42.js");
// for-of is defined in terms of basic operations on objects, particularly
// [[Get]] for properties named "iterator" and "next", and [[Call]]. These
// "semantics" tests check that for-of really does appear to be implemented in
// terms of those more basic operations, as required by the spec, even in
// unusual cases.

// Deleting Array.prototype.iterator makes for-of stop working on arrays.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("e2c808509c360663d6364e14c187fc8f.js");

delete Array.prototype[Symbol.iterator];
assertThrowsInstanceOf(function () { for (var x of []) ; }, TypeError);
