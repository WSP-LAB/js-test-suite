load("201224b0d1c296b45befd2285e95dd42.js");
g = newGlobal();
g.log = "";
Debugger(g).onDebuggerStatement = frame => frame.eval("log += this.Math.toString();");
g.eval("(function() { with ({}) debugger })()");
assertEq(g.log, "[object Math]");
