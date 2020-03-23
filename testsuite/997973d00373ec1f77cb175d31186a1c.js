load("201224b0d1c296b45befd2285e95dd42.js");
function testGlobalProtoAccess() {
    return "ok";
}
this.__proto__.a = 3; for (var j = 0; j < 4; ++j) { [a]; }
assertEq(testGlobalProtoAccess(), "ok");
