load("201224b0d1c296b45befd2285e95dd42.js");
// A debugger can survive per-compartment GC.

var g = newGlobal();
var dbg = Debugger(g);
gc(g);
gc(this);
