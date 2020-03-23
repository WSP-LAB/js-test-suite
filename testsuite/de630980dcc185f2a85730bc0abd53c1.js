load("201224b0d1c296b45befd2285e95dd42.js");
// getNewestFrame basics.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
var dbg = new Debugger(g);
assertEq(dbg.getNewestFrame(), null);

var global = this;
var frame;
function f() {
    frame = dbg.getNewestFrame();
    assertEq(frame instanceof Debugger.Frame, true);
    assertEq(frame.type, "eval");
    assertEq(frame.older, null);
}
g.h = this;
g.eval("h.f()");
assertEq(frame.live, false);
assertThrowsInstanceOf(function () { frame.older; }, Error);
