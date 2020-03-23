load("201224b0d1c296b45befd2285e95dd42.js");
// SharedArrayBuffer.prototype.byteLength

if (!this.SharedArrayBuffer)
    quit(0);

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

let buffer = new SharedArrayBuffer(137);
assertEq(buffer.byteLength, 137);
