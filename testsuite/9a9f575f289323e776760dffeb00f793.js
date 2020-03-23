load("201224b0d1c296b45befd2285e95dd42.js");
// If !frame.live, frame.environment throws.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
var dbg = Debugger(g);
var frame;
g.h = function () { frame = dbg.getNewestFrame(); };
g.eval("h();");
assertEq(frame.live, false);
assertThrowsInstanceOf(function () { frame.environment; }, Error);
