load("201224b0d1c296b45befd2285e95dd42.js");
options('strict_mode');
var g1 = newGlobal();
var g2 = newGlobal();
var dbg = new Debugger();
dbg.addDebuggee(g1);
g1.eval('function f() {}');
gczeal(9, 1);
dbg.findScripts({});
