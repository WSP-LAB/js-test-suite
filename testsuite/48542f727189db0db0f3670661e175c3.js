load("201224b0d1c296b45befd2285e95dd42.js");
function testReallyDeepNestedExit() {
    for (var i = 0; i < 5*4; i++) {}
    for (var o = schedule = i = 9 ; i < 5; i++) {}
}
assertEq(testReallyDeepNestedExit(), undefined);

