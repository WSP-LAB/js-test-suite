load("201224b0d1c296b45befd2285e95dd42.js");

var g = newGlobal();
var dbg = new Debugger(g);
dbg.onNewScript = function(script) {
    fscript = script.getChildScripts()[0];
}
g.eval("function f(x) { arguments[0] = 3; return x }");
fscript.setBreakpoint(0, {hit:function(frame) {
    assertEq(frame.arguments[0], 1);
}});
g.f(1);
