load("201224b0d1c296b45befd2285e95dd42.js");
// Iterator.prototype.next throws if applied to a non-iterator that inherits from an iterator.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("e2c808509c360663d6364e14c187fc8f.js");

var it = [1, 2][Symbol.iterator]();
var v = Object.create(it);
assertThrowsInstanceOf(function () { Iterator.prototype.next.call(v); }, TypeError);
