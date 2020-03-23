load("201224b0d1c296b45befd2285e95dd42.js");

function testNaN(x) {
    var x = NaN;
    assertEq(isNaN(x), true);
}
testNaN();

function testInfinity(x) {
    return (x === Infinity);
}
assertEq(testInfinity(Infinity), true);
assertEq(testInfinity(6), false);
assertEq(testInfinity(-Infinity), false);

function testUndefined(x) {
    return (x === undefined);
}
assertEq(testUndefined(undefined), true);
assertEq(testUndefined(), true);
assertEq(testUndefined(5), false);
