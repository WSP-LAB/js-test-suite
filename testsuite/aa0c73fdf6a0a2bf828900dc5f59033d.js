load("201224b0d1c296b45befd2285e95dd42.js");
// frame.script can create a Debugger.Script for a JS_Evaluate* script.

var g = newGlobal();
var dbg = Debugger(g);
var s;
dbg.onDebuggerStatement = function (frame) { s = frame.script; };
g.evaluate("debugger;");
assertEq(s instanceof Debugger.Script, true);
