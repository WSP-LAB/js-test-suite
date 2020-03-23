load("201224b0d1c296b45befd2285e95dd42.js");
// for-of works on arrays.

var a = ['a', 'b', 'c'];
var s = '';
for (var v of a)
    s += v;
assertEq(s, 'abc');
