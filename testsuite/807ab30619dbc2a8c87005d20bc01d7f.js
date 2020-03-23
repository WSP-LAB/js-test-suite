load("201224b0d1c296b45befd2285e95dd42.js");
// Debugger.prototype.onDebuggerStatement

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
var dbg = new Debugger(g);
gc();  // don't assert marking debug hooks
assertEq(dbg.onDebuggerStatement, undefined);

function f() {}

assertThrowsInstanceOf(function () { dbg.onDebuggerStatement = null; }, TypeError);
assertThrowsInstanceOf(function () { dbg.onDebuggerStatement = "bad"; }, TypeError);
assertThrowsInstanceOf(function () { dbg.onDebuggerStatement = {}; }, TypeError);
dbg.onDebuggerStatement = f;
assertEq(dbg.onDebuggerStatement, f);

assertEq(Object.getOwnPropertyNames(dbg).length, 0);
var desc = Object.getOwnPropertyDescriptor(Debugger.prototype, "onDebuggerStatement");
assertEq(desc.configurable, true);
assertEq(desc.enumerable, false);

assertThrowsInstanceOf(function () { desc.get(); }, TypeError);
assertThrowsInstanceOf(function () { desc.get.call(undefined); }, TypeError);
assertThrowsInstanceOf(function () { desc.get.call(Debugger.prototype); }, TypeError);
assertEq(desc.get.call(dbg), f);

assertThrowsInstanceOf(function () { desc.set(); }, TypeError);
assertThrowsInstanceOf(function () { desc.set.call(dbg); }, TypeError);
assertThrowsInstanceOf(function () { desc.set.call({}, f); }, TypeError);
assertThrowsInstanceOf(function () { desc.set.call(Debugger.prototype, f); }, TypeError);
