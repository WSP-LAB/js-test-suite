load("201224b0d1c296b45befd2285e95dd42.js");
// Setting onPop handlers from a 'debugger' statement handler works.
var g = newGlobal();
var dbg = new Debugger(g);
var log;

dbg.onDebuggerStatement = function handleDebugger(frame) {
    assertEq(frame.type, "eval");
    log += 'd';
    frame.onPop = function handlePop(c) {
        log += ')';
    };
};

log = '';
g.eval('debugger;');
assertEq(log, 'd)');
