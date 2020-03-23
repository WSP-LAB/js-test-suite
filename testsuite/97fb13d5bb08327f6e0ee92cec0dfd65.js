load("201224b0d1c296b45befd2285e95dd42.js");
var g = newGlobal();
g.log = '';

var dbg = Debugger(g);
dbg.onDebuggerStatement = function (stack) { g.log += '!'; };
assertEq(g.eval("log += '1'; debugger; log += '2'; 3;"), 3);
assertEq(g.log, '1!2');
