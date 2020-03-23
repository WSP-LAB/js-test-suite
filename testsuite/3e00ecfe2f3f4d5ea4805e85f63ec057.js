load("201224b0d1c296b45befd2285e95dd42.js");
function test() {
    for (var i=0; i<100000; i++) {
        var a = -0x80000000;
        assertEq(a >>> 32, 2147483648);
    }
}
test();
