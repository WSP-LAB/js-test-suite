load("201224b0d1c296b45befd2285e95dd42.js");
// onNewGlobalObject handlers fire, until they are removed.

var dbg = new Debugger;
var log;

log = '';
newGlobal();
assertEq(log, '');

dbg.onNewGlobalObject = function (global) {
  log += 'n';
  assertEq(global.seen, undefined);
  global.seen = true;
};

log = '';
newGlobal();
assertEq(log, 'n');

log = '';
dbg.onNewGlobalObject = undefined;
newGlobal();
assertEq(log, '');
