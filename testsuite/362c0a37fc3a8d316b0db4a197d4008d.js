load("201224b0d1c296b45befd2285e95dd42.js");
load("789647b4b1873ad4adf74568147f8449.js");

var bigScript = `
    function wee() { return 42 }
    function asmModule() { 'use asm'; function f() { return 43 } return f}
` + ' '.repeat(10 * 1024 * 1024);

eval(bigScript);

if (isAsmJSCompilationAvailable())
    assertEq(isAsmJSModule(asmModule), true);

assertEq(wee(), 42);
assertEq(eval('(' + wee.toSource() + ')')(), 42);
