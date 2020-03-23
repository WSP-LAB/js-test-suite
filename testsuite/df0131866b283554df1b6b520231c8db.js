load("201224b0d1c296b45befd2285e95dd42.js");
// Test tracing of two views of a SharedArrayBuffer. Uses a different path.

function f() {
    var x = new SharedArrayBuffer(0x1000);
    var y = new Int32Array(x);
    var z = new Int8Array(x);
    gc();
}

if (this.SharedArrayBuffer)
    f();
