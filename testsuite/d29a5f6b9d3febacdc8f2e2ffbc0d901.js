load("201224b0d1c296b45befd2285e95dd42.js");
function testAddUndefined() {
    for (var j = 0; j < 3; ++j)
        (0 + void 0) && 0;
}
testAddUndefined();
