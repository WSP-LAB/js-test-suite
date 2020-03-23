load("201224b0d1c296b45befd2285e95dd42.js");
// simplest possible test of Debugger.Frame.prototype.eval

var g = newGlobal();
var dbg = new Debugger(g);
var c;
dbg.onDebuggerStatement = function (frame) { c = frame.eval("2 + 2"); };
g.eval("debugger;");
assertEq(c.return, 4);
