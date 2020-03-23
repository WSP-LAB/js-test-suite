load("201224b0d1c296b45befd2285e95dd42.js");
function testINITELEM()
{
    var x;
    for (var i = 0; i < 10; ++i)
        x = { 0: 5, 1: 5 };
    return x[0] + x[1];
}
assertEq(testINITELEM(), 10);
