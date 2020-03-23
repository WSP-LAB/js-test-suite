load("201224b0d1c296b45befd2285e95dd42.js");
// Clearing a Set with a nontrivial number of elements works.

var s = new Set();
for (var i = 0; i < 100; i++)
    s.add(i);
assertEq(s.size, i);
s.clear();
assertEq(s.size, 0);
s.add(12);
assertEq(s.has(12), true);
