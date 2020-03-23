load("201224b0d1c296b45befd2285e95dd42.js");
// Debugger.Object.prototype.executeInGlobal throws when asked to evaluate in a CCW of a global.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var dbg = new Debugger();

var g1 = newGlobal();
var dg1 = dbg.addDebuggee(g1);

var g2 = newGlobal();
var dg2 = dbg.addDebuggee(g2);

// Generate a Debugger.Object viewing g2 from g1's compartment.
var dg1wg2 = dg1.makeDebuggeeValue(g2);
assertEq(dg1wg2.global, dg1);
assertEq(dg1wg2.unwrap(), dg2);
assertThrowsInstanceOf(function () { dg1wg2.executeInGlobal('1'); }, TypeError);
assertThrowsInstanceOf(function () { dg1wg2.executeInGlobalWithBindings('x', { x: 1 }); }, TypeError);

// These, however, should not throw.
assertEq(dg1wg2.unwrap().executeInGlobal('1729').return, 1729);
assertEq(dg1wg2.unwrap().executeInGlobalWithBindings('x', { x: 1729 }).return, 1729);
