load("201224b0d1c296b45befd2285e95dd42.js");
function test() {
    for (var i = 0; i < 60; i++) {
        x = ''.charAt(-1);
        assertEq(x, "");
    }
}
test();
