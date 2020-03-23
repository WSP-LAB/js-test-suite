load("201224b0d1c296b45befd2285e95dd42.js");
// getVariable sees properties inherited from a with-object's prototype chain.

var g = newGlobal();
var dbg = Debugger(g);
var v;
dbg.onDebuggerStatement = function (frame) {
    v = frame.environment.getVariable("x");
};
g.eval("var x = 1; { let x = 2; with (Object.create({x: 3})) { debugger; } }");
assertEq(v, 3);
