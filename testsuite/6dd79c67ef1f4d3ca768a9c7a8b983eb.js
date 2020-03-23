load("201224b0d1c296b45befd2285e95dd42.js");
// addDebuggee returns different Debugger.Object wrappers for different Debugger objects.

var g = newGlobal();
var dbg1 = new Debugger;
var gw1 = dbg1.addDebuggee(g);
var dbg2 = new Debugger;
var gw2 = dbg2.addDebuggee(g);
assertEq(gw1 !== gw2, true);
