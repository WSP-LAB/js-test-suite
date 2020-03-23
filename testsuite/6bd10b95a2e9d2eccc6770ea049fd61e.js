load("201224b0d1c296b45befd2285e95dd42.js");
// obj.defineProperty throws if a value, getter, or setter is in a different compartment than obj

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
var g1 = newGlobal();
var g2 = newGlobal();
var dbg = new Debugger;
var g1w = dbg.addDebuggee(g1);
var g2w = dbg.addDebuggee(g2);
assertThrowsInstanceOf(function () { g1w.defineProperty('x', {value: g2w}); }, TypeError);
assertThrowsInstanceOf(function () { g1w.defineProperty('x', {get: g1w, set: g2w}); }, TypeError);
