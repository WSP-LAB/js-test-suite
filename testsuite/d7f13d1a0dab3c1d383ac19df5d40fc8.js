load("201224b0d1c296b45befd2285e95dd42.js");
// onExceptionUnwind is not called for exceptions thrown and handled in the debugger.
var g = newGlobal();
var dbg = Debugger(g);
g.log = '';
dbg.onDebuggerStatement = function (frame) {
    try {
        throw new Error("oops");
    } catch (exc) {
        g.log += exc.message;
    }
};
dbg.onExceptionUnwind = function (frame) {
    g.log += 'BAD';
};

g.eval("debugger; log += ' ok';");
assertEq(g.log, 'oops ok');
