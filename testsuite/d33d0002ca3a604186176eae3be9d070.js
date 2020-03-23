load("201224b0d1c296b45befd2285e95dd42.js");
var g = newGlobal();
var dbg = Debugger(g);
dbg.onNewScript = function (s) {
    throw new Error();
};
dbg.uncaughtExceptionHook = function () {}
g.eval("2 * 3");
