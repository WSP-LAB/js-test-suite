load("201224b0d1c296b45befd2285e95dd42.js");
function testDestructuring() {
    var t = 0;
    for (var i = 0; i < 9; ++i) {
        var [r, g, b] = [1, 1, 1];
        t += r + g + b;
    }
    return t
}
assertEq(testDestructuring(), (9) * 3);
