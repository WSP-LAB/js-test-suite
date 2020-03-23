load("201224b0d1c296b45befd2285e95dd42.js");
// A garbage collection in the debuggee compartment does not disturb onPop
// handlers.
var g = newGlobal();
var dbg = new Debugger(g);
var log;

dbg.onEnterFrame = function handleEnter(frame) {
    log += '(';
    frame.onPop = function handlePop(completion) {
        log += ')';
    };
};

log = '';
assertEq(g.eval('gc(this); 42;'), 42);
assertEq(log, '()');
