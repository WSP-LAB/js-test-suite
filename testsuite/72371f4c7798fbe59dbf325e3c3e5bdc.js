load("201224b0d1c296b45befd2285e95dd42.js");
function testGetCallObjInlined(i) {
    if (i > 7) eval("1");
    return 1;
}

function testGetCallObj() {
    for (var i = 0; i < 10; ++i)
        testGetCallObjInlined(i);
    return "ok";
}
assertEq(testGetCallObj(), "ok");
