load("201224b0d1c296b45befd2285e95dd42.js");
// Don't allow cycles in the graph of the compartment "debugs" relation.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

// trivial cycles
var dbg = new Debugger;
assertThrowsInstanceOf(function () { dbg.addDebuggee(this); }, TypeError);
assertThrowsInstanceOf(function () { new Debugger(this); }, TypeError);

// cycles of length 2
var d1 = newGlobal();
d1.top = this;
d1.eval("var dbg = new Debugger(top)");
assertThrowsInstanceOf(function () { dbg.addDebuggee(d1); }, TypeError);
assertThrowsInstanceOf(function () { new Debugger(d1); }, TypeError);

// cycles of length 3
var d2 = newGlobal();
d2.top = this;
d2.eval("var dbg = new Debugger(top.d1)");
assertThrowsInstanceOf(function () { dbg.addDebuggee(d2); }, TypeError);
assertThrowsInstanceOf(function () { new Debugger(d2); }, TypeError);
