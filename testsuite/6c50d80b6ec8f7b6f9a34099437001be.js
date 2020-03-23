load("201224b0d1c296b45befd2285e95dd42.js");
// Check that if an onExceptionUnwind hook forces a constructor frame to
// return a primitive value, it still gets wrapped up in an object.

var g = newGlobal();
var dbg = Debugger(g);
dbg.onExceptionUnwind = function (frame, exc) {
    return { return:"sproon" };
};
g.eval("function f() { throw 'ksnife'; }");
assertEq(typeof new g.f, "object");
