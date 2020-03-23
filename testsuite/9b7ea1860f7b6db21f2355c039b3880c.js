load("201224b0d1c296b45befd2285e95dd42.js");
// Check that an onExceptionUnwind hook can force a frame to throw a different exception.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
var dbg = Debugger(g);
dbg.onExceptionUnwind = function (frame, exc) {
    return { throw:"sproon" };
};
g.eval("function f() { throw 'ksnife'; }");
assertThrowsValue(g.f, "sproon");
