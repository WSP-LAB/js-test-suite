load("201224b0d1c296b45befd2285e95dd42.js");
// Resumption values from onPromiseSettled handlers are disallowed.
if (!('Promise' in this))
    quit(0);

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
var dbg = new Debugger(g);
var log;

dbg.onPromiseSettled = function (g) { log += 's'; return undefined; };
log = '';
g.settlePromiseNow(new g.Promise(function (){}));
assertEq(log, 's');

dbg.uncaughtExceptionHook = function (ex) { assertEq(/disallowed/.test(ex), true); log += 'u'; }
dbg.onPromiseSettled = function (g) { log += 's'; return { return: "snoo" }; };
log = '';
g.settlePromiseNow(new g.Promise(function (){}));
assertEq(log, 'su');

dbg.onPromiseSettled = function (g) { log += 's'; return { throw: "snoo" }; };
log = '';
g.settlePromiseNow(new g.Promise(function (){}));
assertEq(log, 'su');

dbg.onPromiseSettled = function (g) { log += 's'; return null; };
log = '';
g.settlePromiseNow(new g.Promise(function (){}));
assertEq(log, 'su');

dbg.uncaughtExceptionHook = function (ex) { assertEq(/foopy/.test(ex), true); log += 'u'; }
dbg.onPromiseSettled = function (g) { log += 's'; throw "foopy"; };
log = '';
g.settlePromiseNow(new g.Promise(function (){}));
assertEq(log, 'su');

