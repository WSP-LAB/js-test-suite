load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test|

load("789647b4b1873ad4adf74568147f8449.js");

// Turn on debugging for the current global.
var g = newGlobal();
var dbg = new g.Debugger(this);

assertAsmTypeFail("'use asm'; function f() {} return f");
