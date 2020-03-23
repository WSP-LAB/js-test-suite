load("201224b0d1c296b45befd2285e95dd42.js");
function testNEWINIT_DOUBLE()
{
    for (var z = 0; z < 2; ++z) { ({ 0.1: null })}
    return "ok";
}
assertEq(testNEWINIT_DOUBLE(), "ok");
