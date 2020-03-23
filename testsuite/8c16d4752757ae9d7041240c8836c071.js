load("201224b0d1c296b45befd2285e95dd42.js");
var g = newGlobal();
var dbg = new Debugger();
var gw = dbg.addDebuggee(g);
dbg.onDebuggerStatement = function (f) {
	gw.executeInGlobal("eval('var x = \"A Brief History of Love\"');\n")
};
g.eval('debugger');
