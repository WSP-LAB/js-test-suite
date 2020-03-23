load("201224b0d1c296b45befd2285e95dd42.js");

function testLocalNames() {
    var NaN = 4;
    var undefined = 5;
    var Infinity = 6;
    return NaN + undefined + Infinity;
}
assertEq(testLocalNames(), 15);

