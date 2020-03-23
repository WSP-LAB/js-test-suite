load("201224b0d1c296b45befd2285e95dd42.js");
// for-of visits each hole in an array full of holes.

var n = 0;
for (var x of Array(5)) {
    assertEq(x, undefined);
    n++;
}
assertEq(n, 5);
