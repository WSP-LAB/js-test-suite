load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError
var g = newGlobal();
g.debuggeeGlobal = this;
g.eval("(" + function () {
        dbg = new Debugger(debuggeeGlobal);
        dbg.onExceptionUnwind = Map;
} + ")();");
throw new Error("oops");
