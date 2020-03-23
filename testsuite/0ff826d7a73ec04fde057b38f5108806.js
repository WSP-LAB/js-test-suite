load("201224b0d1c296b45befd2285e95dd42.js");
// Each Set has its own size.

var s1 = new Set(), s2 = new Set();
for (var i = 0; i < 30; i++)
    s1.add(i);
assertEq(s1.size, 30);
assertEq(s2.size, 0);
