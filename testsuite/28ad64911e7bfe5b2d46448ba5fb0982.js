load("201224b0d1c296b45befd2285e95dd42.js");
// Sets can hold at least 64K values.

var N = 1 << 16;
var s = new Set;
for (var i = 0; i < N; i++)
    assertEq(s.add(i), s);
for (var i = 0; i < N; i++)
    assertEq(s.has(i), true);
