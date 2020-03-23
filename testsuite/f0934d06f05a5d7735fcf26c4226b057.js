load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| allow-oom

if (!('oomAfterAllocations' in this))
  quit();

var g = newGlobal();
g.debuggeeGlobal = this;
g.eval("(" + function() {
    oomAfterAllocations(100);
    var dbg = Debugger(debuggeeGlobal);
    dbg.onEnterFrame = function(frame) {}
} + ")()");
