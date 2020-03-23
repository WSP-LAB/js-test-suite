load("201224b0d1c296b45befd2285e95dd42.js");
// frame.environment is a Debugger.Environment object

var g = newGlobal()
var dbg = Debugger(g);
g.h = function () {
    assertEq(dbg.getNewestFrame().environment instanceof Debugger.Environment, true);
};

g.eval("h()");
g.evaluate("h()");
g.eval("eval('h()')");
g.eval("function f() { h(); }");
g.f();
