load("201224b0d1c296b45befd2285e95dd42.js");
function testThinLoopDemote() {
    function f()
    {
        var k = 1;
        for (var n = 0; n < 4; n++) {
            k = (k * 10);
        }
        return k;
    }
    f();
    return f();
}
assertEq(testThinLoopDemote(), 10000);
