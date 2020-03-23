load("201224b0d1c296b45befd2285e95dd42.js");
try {
    function test() {
        var arr = new Int8Array(400);
        var o = new test(true);
        arr[idx] = 9;
    }
    test();
} catch(e) {
    assertEq(""+e, "InternalError: too much recursion");
}
