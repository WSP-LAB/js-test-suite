load("201224b0d1c296b45befd2285e95dd42.js");
// Redundant non-global Debugger() arguments are ignored.

var g = newGlobal();
g.eval("var a = {}, b = {};");
var dbg = Debugger(g.a, g.b);
var arr = dbg.getDebuggees();
assertEq(arr.length, 1);
assertEq(arr[0], dbg.addDebuggee(g));
