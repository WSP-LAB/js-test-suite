load("201224b0d1c296b45befd2285e95dd42.js");
// for-of can iterate over typed arrays.

var a = new Int8Array([0, 1, -7, 3])
var s = '';
for (var v of a)
    s += v + ',';
assertEq(s, '0,1,-7,3,');
