load("201224b0d1c296b45befd2285e95dd42.js");
// Test that the SharedArrayBuffer memory is properly zeroed.

function f() {
    var x = new SharedArrayBuffer(4096);
    var y = new Int32Array(x);
    assertEq(y[0], 0);
    assertEq(y[1], 0);
    assertEq(y[1023], 0);
}

if (this.SharedArrayBuffer)
    f();
