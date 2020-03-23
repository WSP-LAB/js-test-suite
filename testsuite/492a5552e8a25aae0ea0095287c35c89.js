load("201224b0d1c296b45befd2285e95dd42.js");
// Deleting String.prototype.iterator makes for-of stop working on strings.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("e2c808509c360663d6364e14c187fc8f.js");

delete String.prototype[Symbol.iterator];
assertThrowsInstanceOf(function () { for (var v of "abc") ; }, TypeError);
assertThrowsInstanceOf(function () { for (var v of new String("abc")) ; }, TypeError);
