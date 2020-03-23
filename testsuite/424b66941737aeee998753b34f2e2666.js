load("201224b0d1c296b45befd2285e95dd42.js");
var g = newGlobal();
var dbg = new Debugger(g);

dbg.onDebuggerStatement = (frame) => { frame.eval("c = 42;"); };
g.evalReturningScope("'use strict'; debugger;");
