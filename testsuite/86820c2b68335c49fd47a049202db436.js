load("201224b0d1c296b45befd2285e95dd42.js");
// Clearing an empty Map has no effect.

var m = new Map();
for (var i = 0; i < 2; i++) {
    m.clear();
    assertEq(m.size, 0);
    assertEq(m.has(undefined), false);
}
