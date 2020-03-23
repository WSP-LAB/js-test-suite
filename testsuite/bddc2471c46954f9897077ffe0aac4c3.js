load("201224b0d1c296b45befd2285e95dd42.js");
// Debugger.prototype.getNewestFrame() ignores dummy frames.
// See bug 678086.

var g = newGlobal();
g.f = function () { return dbg.getNewestFrame(); };
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
var fw = gw.getOwnPropertyDescriptor("f").value;
assertEq(fw.call().return, null);
