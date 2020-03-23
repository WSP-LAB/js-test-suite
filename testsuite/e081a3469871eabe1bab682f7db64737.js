load("201224b0d1c296b45befd2285e95dd42.js");
// A resumption value can't have both {return:} and {throw:} properties.

var g = newGlobal();
var dbg = Debugger(g);
dbg.onDebuggerStatement = stack => ({return: 1, throw: 2});
dbg.uncaughtExceptionHook = exc => ({return: "corrected"});
assertEq(g.eval("debugger; false;"), "corrected");
