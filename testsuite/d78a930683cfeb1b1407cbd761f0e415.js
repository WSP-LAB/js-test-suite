load("201224b0d1c296b45befd2285e95dd42.js");
// Debugger.Object referents can be transparent wrappers of objects in the debugger compartment.

var g = newGlobal();
g.f = function (a, b) { return a + "/" + b; };
var dbg = Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    var f = frame.eval("f").return;
    assertEq(f.call(null, "a", "b").return, "a/b");
    hits++;
};
g.eval("debugger;");
assertEq(hits, 1);
