load("201224b0d1c296b45befd2285e95dd42.js");
// Giving an Array an own .iterator property affects for-of.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("e2c808509c360663d6364e14c187fc8f.js");

var a = [];
a[Symbol.iterator] = function* () {
    yield 'o';
    yield 'k';
};
var s = '';
for (var v of a)
    s += v;
assertEq(s, 'ok');

a[Symbol.iterator] = undefined;
assertThrowsInstanceOf(function () { for (var v of a) ; }, TypeError);
