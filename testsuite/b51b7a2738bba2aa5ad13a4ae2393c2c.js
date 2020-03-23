load("201224b0d1c296b45befd2285e95dd42.js");
function testDivisionWithNegative1() {
    for (var i = 3; i >= 0; --i)
        c = i / -1;
    return 1/c;
}
assertEq(testDivisionWithNegative1(), -Infinity);
