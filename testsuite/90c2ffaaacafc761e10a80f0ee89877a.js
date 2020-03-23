load("201224b0d1c296b45befd2285e95dd42.js");
function testStringObjectLength() {
    var x = new String("foo"), y = 0;
    for (var i = 0; i < 10; ++i)
        y = x.length;
    return y;
}
assertEq(testStringObjectLength(), 3);
