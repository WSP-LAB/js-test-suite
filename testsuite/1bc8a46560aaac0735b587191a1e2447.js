load("201224b0d1c296b45befd2285e95dd42.js");
// Debugger mode can be disabled for a compartment even if it has scripts running.
var g = newGlobal();
var dbg = Debugger(g);
g.parent = this;
var n = 2;
g.eval("parent.dbg.removeDebuggee(this); parent.n += 2");
assertEq(n, 4);
