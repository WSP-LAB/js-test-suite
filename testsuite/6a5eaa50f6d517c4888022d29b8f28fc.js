load("201224b0d1c296b45befd2285e95dd42.js");
// Events in a non-debuggee are ignored, even if a debuggee is in the same compartment.
var g1 = newGlobal();
var g2 = g1.eval("newGlobal('same-compartment')");
var dbg = new Debugger(g1);
var hits = 0;
dbg.onDebuggerStatement = function () { hits++; };
g1.eval("debugger;");
assertEq(hits, 1);
g2.eval("debugger;");
assertEq(hits, 1);
