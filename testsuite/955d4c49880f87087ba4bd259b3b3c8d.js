load("201224b0d1c296b45befd2285e95dd42.js");
// defineProperty can make a non-configurable writable property non-writable

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
var g = newGlobal();
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
gw.defineProperty("p", {writable: true, value: 1});
gw.defineProperty("p", {writable: false});
g.p = 4;
assertEq(g.p, 1);
