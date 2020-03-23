load("201224b0d1c296b45befd2285e95dd42.js");
function testDivisionFloat() {
    var a = 32768.0;
    var b;
    while (b !== 1) {
        b = a / 2.0;
        a = b;
    }
    return a === 1.0;
}
assertEq(testDivisionFloat(), true);
