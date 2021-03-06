load("201224b0d1c296b45befd2285e95dd42.js");
// Debugger.Object.prototype.makeDebuggeeValue returns the object wrapped
// the same way as Debugger.Frame.prototype.eval, etc.
var g = newGlobal();
g.eval("function f() { debugger; }");
var dbg = Debugger();
var gw = dbg.addDebuggee(g);
var jsonw;
dbg.onDebuggerStatement = function (frame) {
    jsonw = frame.eval("JSON").return;
};
g.eval("debugger;");
assertEq(gw.makeDebuggeeValue(g.JSON), jsonw);
