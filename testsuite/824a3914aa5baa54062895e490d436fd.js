load("201224b0d1c296b45befd2285e95dd42.js");
function testNegativeGETELEMIndex()
{
    for (let i=0;i<3;++i) /x/[-4];
    return "ok";
}
assertEq(testNegativeGETELEMIndex(), "ok");
