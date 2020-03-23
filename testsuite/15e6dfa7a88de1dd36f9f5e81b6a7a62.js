load("201224b0d1c296b45befd2285e95dd42.js");
if (helperThreadCount() === 0)
  quit(0);

var global = newGlobal();
var dbg = new Debugger(global);

dbg.onNewScript = function (s) {
  if (s.url === "<string>")
    assertEq(s.getChildScripts().length, 1);
};

global.eval('offThreadCompileScript("function inner() { \\\"use asm\\\"; function xxx() {} return xxx; }");');
global.eval('runOffThreadScript();');
