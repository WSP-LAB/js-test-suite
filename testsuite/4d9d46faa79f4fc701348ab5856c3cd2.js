load("201224b0d1c296b45befd2285e95dd42.js");
// Repeated Debugger() arguments are ignored.

var g = newGlobal();
var dbg = Debugger(g, g, g);
assertEq(dbg.getDebuggees().length, 1);
