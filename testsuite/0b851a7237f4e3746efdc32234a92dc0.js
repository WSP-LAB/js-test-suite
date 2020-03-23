load("201224b0d1c296b45befd2285e95dd42.js");
// getVariable works on ancestors of frame.environment.

var g = newGlobal();
var dbg = Debugger(g);
var log = '';
dbg.onDebuggerStatement = function (frame) {
    for (var env = frame.environment; env; env = env.parent) {
        if (env.find("x") === env)
            log += env.getVariable("x");
    }
};
g.eval("var x = 1; { let x = 2; with (Object.create({x: 3})) { debugger; } }");
assertEq(log, "321");
