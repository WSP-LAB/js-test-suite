load("201224b0d1c296b45befd2285e95dd42.js");
// Setting a breakpoint in a script we are no longer debugging is an error.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
var dbg = Debugger();
var gobj = dbg.addDebuggee(g);
g.eval("function f() { return 2; }");

var s;
dbg.onDebuggerStatement = function (frame) { s = frame.eval("f").return.script; };
g.eval("debugger;");
s.setBreakpoint(0, {});  // ok

dbg.removeDebuggee(gobj);
assertThrowsInstanceOf(function () { s.setBreakpoint(0, {}); }, Error);
