load("201224b0d1c296b45befd2285e95dd42.js");
load("789647b4b1873ad4adf74568147f8449.js");

var g = newGlobal();
g.parent = this;
g.eval("dbg = new Debugger(parent);");

// Initial state is to inhibit asm.js.
assertEq(g.dbg.allowUnobservedAsmJS, false);

var asmFunStr = USE_ASM + 'function f() {} return f';

// With asm.js inhibited, asm.js should fail with a type error about the
// debugger being on.
assertAsmTypeFail(asmFunStr);

// With asm.js uninhibited, asm.js linking should work.
g.dbg.allowUnobservedAsmJS = true;
assertEq(asmLink(asmCompile(asmFunStr))(), undefined);

// Toggling back should inhibit again.
g.dbg.allowUnobservedAsmJS = false;
assertAsmTypeFail(asmFunStr);

// Disabling the debugger should uninhibit.
g.dbg.enabled = false;
assertEq(asmLink(asmCompile(asmFunStr))(), undefined);

// Enabling it should inhibit again.
g.dbg.enabled = true;
assertAsmTypeFail(asmFunStr);

// Removing the global should lift the inhibition.
g.dbg.removeDebuggee(this);
assertEq(asmLink(asmCompile(asmFunStr))(), undefined);
