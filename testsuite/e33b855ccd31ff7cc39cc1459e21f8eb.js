load("201224b0d1c296b45befd2285e95dd42.js");
// Clearing an empty Set has no effect.

var s = new Set();
for (var i = 0; i < 2; i++) {
    s.clear();
    assertEq(s.size, 0);
    assertEq(s.has(undefined), false);
}
