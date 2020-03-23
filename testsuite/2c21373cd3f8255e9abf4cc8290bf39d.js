load("201224b0d1c296b45befd2285e95dd42.js");
// Don't crash when getting the Debugger.Environment of a frame inside
// Function.prototype.

var g = newGlobal();
var dbg = new Debugger(g);
dbg.onEnterFrame = function (frame) { frame.environment; };
g.Function.prototype();
