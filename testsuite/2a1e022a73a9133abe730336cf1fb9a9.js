load("201224b0d1c296b45befd2285e95dd42.js");
// Simple {return:} resumption.

var g = newGlobal();
var dbg = Debugger(g);
dbg.onDebuggerStatement = function (stack) { return {return: 1234}; };

assertEq(g.eval("debugger; false;"), 1234);
g.eval("function f() { debugger; return 'bad'; }");
assertEq(g.f(), 1234);
