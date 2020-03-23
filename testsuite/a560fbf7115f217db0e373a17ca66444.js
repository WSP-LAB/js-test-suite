load("201224b0d1c296b45befd2285e95dd42.js");
load("789647b4b1873ad4adf74568147f8449.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

if (!isAsmJSCompilationAvailable())
    quit();

var m = asmCompile('stdlib', 'foreign', 'buffer',
                  `"use asm";
                   var i32 = new stdlib.Int32Array(buffer);
                   function set(i,j) {
                       i=i|0;
                       j=j|0;
                       i32[i>>2] = j;
                   }
                   function get(i) {
                       i=i|0;
                       return i32[i>>2]|0
                   }
                   return {get:get, set:set}`);

var buffer = new ArrayBuffer(BUF_MIN);
var {get, set} = asmLink(m, this, null, buffer);
set(4, 42);
assertEq(get(4), 42);
assertThrowsInstanceOf(() => detachArrayBuffer(buffer), Error);

var m = asmCompile('stdlib', 'foreign', 'buffer',
                  `"use asm";
                   var i32 = new stdlib.Int32Array(buffer);
                   var ffi = foreign.ffi;
                   function inner(i) {
                       i=i|0;
                       ffi();
                       return i32[i>>2]|0
                   }
                   return inner`);

var buffer = new ArrayBuffer(BUF_MIN);
function ffi1()
{
    assertThrowsInstanceOf(() => detachArrayBuffer(buffer), Error);
}

var inner = asmLink(m, this, {ffi: ffi1}, buffer);
