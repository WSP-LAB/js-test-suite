load("201224b0d1c296b45befd2285e95dd42.js");
// setVariable cannot modify the binding for a FunctionExpression's name.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
var dbg = Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    var env = frame.environment.find("f");
    assertEq(env.getVariable("f"), frame.callee);
    assertThrowsInstanceOf(function () { env.setVariable("f", 0) }, TypeError);
    assertThrowsInstanceOf(function () { env.setVariable("f", frame.callee) }, TypeError);
    hits++;
};
g.eval("(function f() { debugger; })();");
assertEq(hits, 1);
