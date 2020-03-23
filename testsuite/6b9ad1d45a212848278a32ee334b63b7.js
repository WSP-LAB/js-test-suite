load("201224b0d1c296b45befd2285e95dd42.js");
// Debugger.Scripts keep their referents alive.

var g = newGlobal();
var dbg = Debugger(g);
var arr = [];
dbg.onDebuggerStatement = function (frame) { arr.push(frame.script); };
g.eval("for (var i = 0; i < 10; i++) Function('debugger;')();");
assertEq(arr.length, 10);

gc();

for (var i = 0; i < arr.length; i++)
    assertEq(arr[i].lineCount, 3);

