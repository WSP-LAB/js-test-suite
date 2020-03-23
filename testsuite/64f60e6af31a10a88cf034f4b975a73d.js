load("201224b0d1c296b45befd2285e95dd42.js");
// set.add(v) increments set.size iff the set did not already contain v.

var s = new Set();
for (var i = 0; i < 10; i++) {
    assertEq(s.size, i);
    s.add(i);
}
for (var i = 0; i < 10; i++) {
    assertEq(s.size, 10);
    s.add(i);
}
