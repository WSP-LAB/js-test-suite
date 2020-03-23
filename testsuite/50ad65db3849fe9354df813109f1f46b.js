load("201224b0d1c296b45befd2285e95dd42.js");
// An onNewGlobalObject handler can disable itself.

var dbg = new Debugger;
var log;

dbg.onNewGlobalObject = function (global) {
  log += 'n';
  dbg.onNewGlobalObject = undefined;
};

log = '';
newGlobal();
assertEq(log, 'n');
