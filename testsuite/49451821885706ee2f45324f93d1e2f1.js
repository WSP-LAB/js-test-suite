load("201224b0d1c296b45befd2285e95dd42.js");
// Debugger.allowUnobservedAsmJS with off-thread parsing.

load("789647b4b1873ad4adf74568147f8449.js");

if (helperThreadCount() == 0)
    quit();

var g = newGlobal();
g.parent = this;
g.eval("dbg = new Debugger(parent);");

assertEq(g.dbg.allowUnobservedAsmJS, false);

enableLastWarning();

var asmFunStr = USE_ASM + 'function f() {} return f';
offThreadCompileScript("(function() {" + asmFunStr + "})");
runOffThreadScript();

var msg = getLastWarning().message;
assertEq(msg === "asm.js type error: Disabled by debugger" ||
         msg === "asm.js type error: Disabled by lack of a JIT compiler" ||
         msg === "asm.js type error: Disabled by 'asmjs' runtime option" ||
         msg === "asm.js type error: Disabled by lack of compiler support",
         true);
