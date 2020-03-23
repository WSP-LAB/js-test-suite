load("201224b0d1c296b45befd2285e95dd42.js");
load("dc4b20628140c803c89c741458a4c2d0.js");

function f1(a, bIs, [b], ...rest) {
    assertEq(a, 1);
    assertEq(bIs, b);
    assertEqArray(rest, []);
}
assertEq(f1.length, 3);
f1(1, 3, [3]);
f1(1, 42, [42]);

function f2([a], ...rest) {
    assertEq(a, undefined);
}
f2([]);

function f3([a], ...rest) {
    assertEq(a, 1);
    assertEqArray(rest, [2, 3, 4]);
}
f3([1], 2, 3, 4);
