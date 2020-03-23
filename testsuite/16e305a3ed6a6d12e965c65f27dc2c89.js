load("201224b0d1c296b45befd2285e95dd42.js");
// frame.eval SyntaxErrors are reflected, not thrown

var g = newGlobal();
var dbg = new Debugger(g);
var exc, SEp;
dbg.onDebuggerStatement = function (frame) {
    exc = frame.eval("#$@!").throw;
    SEp = frame.eval("SyntaxError.prototype").return;
};
g.eval("debugger;");
assertEq(exc.proto, SEp);
