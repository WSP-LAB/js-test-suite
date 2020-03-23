load("201224b0d1c296b45befd2285e95dd42.js");
function testUndefinedCmp() {
    var a = false;
    for (var j = 0; j < 4; ++j) { if (undefined < false) { a = true; } }
    return a;
}
assertEq(testUndefinedCmp(), false);
