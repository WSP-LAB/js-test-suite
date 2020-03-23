load("201224b0d1c296b45befd2285e95dd42.js");
// Array.prototype.iterator applied to undefined or null throws directly.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("e2c808509c360663d6364e14c187fc8f.js");

for (var v of [undefined, null]) {
    // ES6 draft 2013-09-05 section 22.1.5.1.
    assertThrowsInstanceOf(function () { Array.prototype[Symbol.iterator].call(v); }, TypeError);
    assertThrowsInstanceOf(function () { Array.prototype.keys.call(v); }, TypeError);
    assertThrowsInstanceOf(function () { Array.prototype.entries.call(v); }, TypeError);
}
