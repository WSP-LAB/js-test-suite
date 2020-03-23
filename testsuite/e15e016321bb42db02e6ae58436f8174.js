load("201224b0d1c296b45befd2285e95dd42.js");
function testReplace2() {
    var s = "H e l l o", s1;
    for (i = 0; i < 100; ++i)
        s1 = s.replace(" ", "");
    return s1;
}
assertEq(testReplace2(), "He l l o");
