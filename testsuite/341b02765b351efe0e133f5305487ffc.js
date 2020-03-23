load("201224b0d1c296b45befd2285e95dd42.js");
// Two for-of loops on the same slow array get distinct iterators.

var a = [1, 2, 3];
a.slow = true;
var s = '';
for (var x of a)
    s += x;
for (var y of a)
    s += y;
assertEq(s, '123123');
