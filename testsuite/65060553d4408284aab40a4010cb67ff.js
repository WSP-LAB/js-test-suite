load("201224b0d1c296b45befd2285e95dd42.js");
function testArrayNaNIndex()
{
    for (var j = 0; j < 4; ++j) { [this[NaN]]; }
    for (var j = 0; j < 5; ++j) { if([1][-0]) { } }
    return "ok";
}
assertEq(testArrayNaNIndex(), "ok");
