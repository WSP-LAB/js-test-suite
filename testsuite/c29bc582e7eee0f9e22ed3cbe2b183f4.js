load("201224b0d1c296b45befd2285e95dd42.js");
function testArrayNamedProp() {
    for (var x = 0; x < 10; ++x) { [4].sort-- }
    return "ok";
}
assertEq(testArrayNamedProp(), "ok");
