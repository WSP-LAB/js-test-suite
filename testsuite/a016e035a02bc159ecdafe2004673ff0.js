load("201224b0d1c296b45befd2285e95dd42.js");
// Debugger.Object.prototype.executeInGlobal sets 'this' to the global.

var dbg = new Debugger;
var g1 = newGlobal();
var g1w = dbg.addDebuggee(g1);

assertEq(g1w.executeInGlobal('this').return, g1w);
assertEq(g1w.executeInGlobalWithBindings('this', { x:42 }).return, g1w);
