load("201224b0d1c296b45befd2285e95dd42.js");
var g = newGlobal();
var dbg = new Debugger(g);
var g = newGlobal();
g.evaluate("function f(x) { return x + 1; }");
var gw = dbg.addDebuggee(g);
gczeal(2, 1);
var s = dbg.findScripts();
gczeal(0);
