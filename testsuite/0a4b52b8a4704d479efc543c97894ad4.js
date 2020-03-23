load("201224b0d1c296b45befd2285e95dd42.js");
function testLongNumToString() {
    var s;
    for (var i = 0; i < 5; i++)
        s = (0x08000000).toString(2);
    return s;
}
assertEq(testLongNumToString(), '1000000000000000000000000000');
