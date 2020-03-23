load("201224b0d1c296b45befd2285e95dd42.js");
// frame.eval returns null if the eval code fails with an uncatchable error.

var g = newGlobal();
var dbg = Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    if (hits++ === 0)
        assertEq(frame.eval("debugger;"), null);
    else
        return null;
};
assertEq(g.eval("debugger; 'ok';"), "ok");
assertEq(hits, 2);
