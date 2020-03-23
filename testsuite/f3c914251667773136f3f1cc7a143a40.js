load("201224b0d1c296b45befd2285e95dd42.js");
// dumb basics of uncaughtExceptionHook

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var desc = Object.getOwnPropertyDescriptor(Debugger.prototype, "uncaughtExceptionHook");
assertEq(typeof desc.get, 'function');
assertEq(typeof desc.set, 'function');

assertThrowsInstanceOf(function () { Debugger.prototype.uncaughtExceptionHook = null; }, TypeError);

var g = newGlobal();
var dbg = new Debugger(g);
assertEq(desc.get.call(dbg), null);
assertThrowsInstanceOf(function () { dbg.uncaughtExceptionHook = []; }, TypeError);
assertThrowsInstanceOf(function () { dbg.uncaughtExceptionHook = 3; }, TypeError);
dbg.uncaughtExceptionHook = Math.sin;
assertEq(dbg.uncaughtExceptionHook, Math.sin);
dbg.uncaughtExceptionHook = null;
assertEq(dbg.uncaughtExceptionHook, null);
