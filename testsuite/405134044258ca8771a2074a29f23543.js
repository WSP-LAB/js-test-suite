load("201224b0d1c296b45befd2285e95dd42.js");
// Debugger.Object.prototype.defineProperty with too few arguments throws.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
assertThrowsInstanceOf(function () { gw.defineProperty("x"); }, TypeError);
