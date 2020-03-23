load("201224b0d1c296b45befd2285e95dd42.js");
// Environment.prototype.setVariable can set global variables.

var g = newGlobal();
var dbg = Debugger(g);
dbg.onDebuggerStatement = function (frame) {
    frame.environment.parent.setVariable("x", 2);
};
g.eval("var x = 1; debugger;");
assertEq(g.x, 2);
