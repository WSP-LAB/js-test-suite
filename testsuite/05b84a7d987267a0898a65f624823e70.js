load("201224b0d1c296b45befd2285e95dd42.js");
// Setting a breakpoint in a non-debuggee Script is an error.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g1 = newGlobal();
var g2 = g1.eval("newGlobal('same-compartment')");
g2.eval("function f() { return 2; }");
g1.f = g2.f;

var dbg = Debugger(g1);
var s;
dbg.onDebuggerStatement = function (frame) { s = frame.eval("f").return.script; };
g1.eval("debugger;");

assertThrowsInstanceOf(function () { s.setBreakpoint(0, {}); }, Error);
