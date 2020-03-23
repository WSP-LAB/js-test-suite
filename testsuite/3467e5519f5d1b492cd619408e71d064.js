load("201224b0d1c296b45befd2285e95dd42.js");
// frame.offset throws if !frame.live.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
var dbg = Debugger(g);
var f;
dbg.onDebuggerStatement = function (frame) { f = frame; };
g.eval("debugger;");
assertEq(f.live, false);
assertThrowsInstanceOf(function () { f.offset; }, Error);
