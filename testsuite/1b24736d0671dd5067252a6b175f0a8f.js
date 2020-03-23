load("201224b0d1c296b45befd2285e95dd42.js");
function testSetPropNeitherMissNorHit() {
    for (var j = 0; j < 5; ++j) { if (({}).__proto__ = 1) { } }
    return "ok";
}
assertEq(testSetPropNeitherMissNorHit(), "ok");
