load("201224b0d1c296b45befd2285e95dd42.js");
// for-of works on cross-compartment wrappers of Arrays.

var g = newGlobal();
var s = '';
for (var x of g.Array(1, 1, 2, 3, 5))
    s += x;
assertEq(s, '11235');
