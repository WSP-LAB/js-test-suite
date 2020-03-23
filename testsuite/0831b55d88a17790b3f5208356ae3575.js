load("201224b0d1c296b45befd2285e95dd42.js");
// Test eval-ing names in a topmost script frame

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
var dbg = new Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    assertEq(frame.eval("a").return, 2);
    assertEq(frame.eval("c").return, 4);
    var exc = frame.eval("d").throw;
    assertEq(exc instanceof Debugger.Object, true);
    assertEq(exc.proto, frame.eval("ReferenceError.prototype").return);
    hits++;
};
g.eval("function f(a, b) { var c = a + b; debugger; eval('debugger;'); }");
g.eval("f(2, 2);");
g.eval("var a = 2, b = 2, c = a + b; debugger;");
assertEq(hits, 3);
