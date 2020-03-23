load("201224b0d1c296b45befd2285e95dd42.js");
// Bug 857050: Remove the timeout function root before shutting down.
function timeoutfunc() {}
timeout(1, timeoutfunc);
var g = newGlobal();
var dbg = Debugger(g);
