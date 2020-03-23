load("201224b0d1c296b45befd2285e95dd42.js");
function testGetThis() {
    for (var i = 0; i < 3; ++i) {
        (function() { return this; })();
    }
    return "ok";
}
assertEq(testGetThis(), "ok");
