load("201224b0d1c296b45befd2285e95dd42.js");
// Deleting the .next method makes for-of stop working on arrays.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("e2c808509c360663d6364e14c187fc8f.js");

var iterProto = Object.getPrototypeOf([][Symbol.iterator]());
delete iterProto.next;
assertThrowsInstanceOf(function () { for (var v of []) ; }, TypeError);
