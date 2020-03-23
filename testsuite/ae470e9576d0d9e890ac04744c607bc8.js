load("201224b0d1c296b45befd2285e95dd42.js");
// Replacing Array.prototype.iterator with something non-callable makes for-of throw.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("e2c808509c360663d6364e14c187fc8f.js");

function test(v) {
    Array.prototype[Symbol.iterator] = v;
    assertThrowsInstanceOf(function () { for (var x of []) ; }, TypeError);
}
test(undefined);
test(null);
test({});
