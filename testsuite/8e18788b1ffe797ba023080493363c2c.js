load("201224b0d1c296b45befd2285e95dd42.js");
// Globals marked as invisibleToDebugger behave appropriately.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var dbg = new Debugger;
var log = '';
dbg.onNewGlobalObject = function (global) {
  log += 'n';
}

assertEq(typeof newGlobal(), "object");
assertEq(typeof newGlobal({invisibleToDebugger: false}), "object");
assertEq(log, 'nn');

log = '';
assertEq(typeof newGlobal({invisibleToDebugger: true}), "object");
assertEq(log, '');

assertThrowsInstanceOf(() => dbg.addDebuggee(newGlobal({invisibleToDebugger: true})), Error);

var glob = newGlobal({invisibleToDebugger: true});
dbg.addAllGlobalsAsDebuggees();
dbg.onDebuggerStatement = function (frame) { assertEq(true, false); };
glob.eval('debugger');
