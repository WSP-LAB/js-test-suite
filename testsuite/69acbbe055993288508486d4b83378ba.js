load("201224b0d1c296b45befd2285e95dd42.js");
// Map iterators produces entries in the order they were inserted.

load("dc4b20628140c803c89c741458a4c2d0.js");

var map = new Map();
for (var i = 7; i !== 1; i = i * 7 % 1117)
    map.set("" + i, i);
assertEq(map.size, 557);

i = 7;
for (var pair of map) {
    assertEqArray(pair, ["" + i, i]);
    i = i * 7 % 1117;
}
assertEq(i, 1);
