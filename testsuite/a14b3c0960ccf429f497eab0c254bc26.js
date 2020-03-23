load("201224b0d1c296b45befd2285e95dd42.js");
// A Debugger object created with no argument initially has no debuggees.
var dbg = new Debugger;
var debuggees = dbg.getDebuggees();
assertEq(Array.isArray(debuggees), true);
assertEq(debuggees.length, 0);
