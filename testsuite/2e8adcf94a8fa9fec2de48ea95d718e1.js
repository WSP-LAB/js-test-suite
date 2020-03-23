load("201224b0d1c296b45befd2285e95dd42.js");
function testConstantBooleanExpr()
{
    for (var j = 0; j < 3; ++j) { if(true <= true) { } }
    return "ok";
}
assertEq(testConstantBooleanExpr(), "ok");
