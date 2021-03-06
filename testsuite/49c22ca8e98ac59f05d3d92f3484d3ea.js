load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("dc4b20628140c803c89c741458a4c2d0.js");

function f1(a, bIs, [b]=[3], ...rest) {
    assertEq(a, 1);
    assertEq(bIs, b);
    assertEqArray(rest, []);
}
assertEq(f1.length, 2);
f1(1, 3);
f1(1, 42, [42]);

function f2([a]=[rest], ...rest) {
    assertEq(a, undefined);
}
// TDZ
assertThrowsInstanceOf(f2, ReferenceError);

function f3([a]=[rest], ...rest) {
    assertEq(a, 1);
    assertEqArray(rest, [2, 3, 4]);
}
// TDZ
assertThrowsInstanceOf(f3, ReferenceError);

function f4([a]=rest, ...rest) {
}
// TDZ
assertThrowsInstanceOf(f4, ReferenceError);
