load("201224b0d1c296b45befd2285e95dd42.js");
// The value returned by getVariable can be a Debugger.Object.

var g = newGlobal();
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    var a = frame.environment.parent.getVariable('Math');
    assertEq(a instanceof Debugger.Object, true);
    var b = gw.getOwnPropertyDescriptor('Math').value;
    assertEq(a, b);
    hits++;
};
g.eval("debugger;");
assertEq(hits, 1);
