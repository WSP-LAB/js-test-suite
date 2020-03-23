load("201224b0d1c296b45befd2285e95dd42.js");
load("789647b4b1873ad4adf74568147f8449.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

if (!isAsmJSCompilationAvailable())
    quit();

var code = USE_ASM + "var i32 = new stdlib.Int32Array(buf); function f() { return i32[0]|0 } return f";

var ab = new ArrayBuffer(BUF_MIN);
new Int32Array(ab)[0] = 42;

var f = asmLink(asmCompile('stdlib', 'ffi', 'buf', code), this, null, ab);
assertEq(f(), 42);

assertThrowsInstanceOf(() => detachArrayBuffer(ab), Error);
assertEq(f(), 42);

assertThrowsInstanceOf(() => serialize(ab, [ab]), Error);
assertEq(f(), 42);
