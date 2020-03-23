load("201224b0d1c296b45befd2285e95dd42.js");
gczeal(11);
g = newGlobal()
g.eval("undefined;function f(){}")
Debugger(g).onDebuggerStatement = function(x) {
    x.eval("f").return.script.setBreakpoint(0, {})
}
g.eval("debugger")
