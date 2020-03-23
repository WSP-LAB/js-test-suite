load("201224b0d1c296b45befd2285e95dd42.js");
// WeakMap should throw if argument is not iterable object.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("e2c808509c360663d6364e14c187fc8f.js");

var non_iterable1 = {};
non_iterable1[Symbol.iterator] = {};
assertThrowsInstanceOf(() => new WeakMap(non_iterable1), TypeError);

var non_iterable2 = {};
non_iterable2[Symbol.iterator] = function() {
};
assertThrowsInstanceOf(() => new WeakMap(non_iterable2), TypeError);
