load("201224b0d1c296b45befd2285e95dd42.js");
// for-of works on slow arrays.

var a = ['a', 'b', 'c'];
a.slow = true;
var log = '';
for (var x of a)
    log += x;
assertEq(log, 'abc');
