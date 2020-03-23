load("201224b0d1c296b45befd2285e95dd42.js");
// Resumption values from onNewGlobalObject handlers are disallowed.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var dbg = new Debugger;
var log;

dbg.onNewGlobalObject = function (g) { log += 'n'; return undefined; };
log = '';
assertEq(typeof newGlobal(), "object");
assertEq(log, 'n');

dbg.uncaughtExceptionHook = function (ex) { assertEq(/disallowed/.test(ex), true); log += 'u'; }
dbg.onNewGlobalObject = function (g) { log += 'n'; return { return: "snoo" }; };
log = '';
assertEq(typeof newGlobal(), "object");
assertEq(log, 'nu');

dbg.onNewGlobalObject = function (g) { log += 'n'; return { throw: "snoo" }; };
log = '';
assertEq(typeof newGlobal(), "object");
assertEq(log, 'nu');

dbg.onNewGlobalObject = function (g) { log += 'n'; return null; };
log = '';
assertEq(typeof newGlobal(), "object");
assertEq(log, 'nu');

dbg.uncaughtExceptionHook = function (ex) { assertEq(/foopy/.test(ex), true); log += 'u'; }
dbg.onNewGlobalObject = function (g) { log += 'n'; throw "foopy"; };
log = '';
assertEq(typeof newGlobal(), "object");
assertEq(log, 'nu');

