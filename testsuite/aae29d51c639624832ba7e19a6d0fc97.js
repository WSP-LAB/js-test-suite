load("201224b0d1c296b45befd2285e95dd42.js");
function testToUpperToLower() {
    var s = "Hello", s1, s2;
    for (i = 0; i < 100; ++i) {
        s1 = s.toLowerCase();
        s2 = s.toUpperCase();
    }
    return s1 + s2;
}
assertEq(testToUpperToLower(), "helloHELLO");
