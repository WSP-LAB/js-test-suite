load("201224b0d1c296b45befd2285e95dd42.js");
// Clearing a frame's onPop handler works.
var g = newGlobal();
g.eval("function f() { debugger; }");
var dbg = new Debugger(g);

var log;
dbg.onEnterFrame = function handleEnter(f) {
    log += "(";
    f.onPop = function handlePop() {
        assertEq("handlePop was called", "handlePop should never be called");
    };
};
dbg.onDebuggerStatement = function handleDebugger(f) {
    log += "d";
    assertEq(typeof f.onPop, "function");
    f.onPop = undefined;
};
log = '';
g.f();
assertEq(log, "(d");
