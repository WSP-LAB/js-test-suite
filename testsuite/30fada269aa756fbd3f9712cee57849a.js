load("201224b0d1c296b45befd2285e95dd42.js");
function O(a) {
    this.x = 20;
    var ret = a ? {x: 10} : 26;
    return ret;
}
function test() {
    for (var i=0; i<100; i++) {
        var o = new O((i & 1) == 1);
        if (i & 1)
            assertEq(o.x, 10);
        else
            assertEq(o.x, 20);
    }
}
test();
