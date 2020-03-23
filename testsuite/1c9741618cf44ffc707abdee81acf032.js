load("201224b0d1c296b45befd2285e95dd42.js");
// A debugger statement in an onDebuggerStatement hook should not reenter.

var g = newGlobal();
var calls = 0;

var dbg = Debugger(g);
dbg.onDebuggerStatement = function (stack) {
    calls++;
    debugger;
};

assertEq(g.eval("debugger; 7;"), 7);
assertEq(calls, 1);
