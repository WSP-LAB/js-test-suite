load("201224b0d1c296b45befd2285e95dd42.js");
// Simple {throw:} resumption.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
var dbg = Debugger(g);
dbg.onDebuggerStatement = function (stack) { return {throw: "oops"}; };

assertThrowsValue(function () { g.eval("debugger;"); }, "oops");

g.eval("function f() { debugger; }");
assertThrowsValue(function () { g.f(); }, "oops");
