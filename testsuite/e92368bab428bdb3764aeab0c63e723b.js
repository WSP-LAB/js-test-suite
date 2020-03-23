load("201224b0d1c296b45befd2285e95dd42.js");
// Resumption values from uncaughtExceptionHook from onNewGlobalObject
// handlers affect the dispatch of the event to other Debugger instances.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var dbg1 = new Debugger;
var dbg2 = new Debugger;
var dbg3 = new Debugger;
var log;
var count;

dbg1.onNewGlobalObject = dbg2.onNewGlobalObject = dbg3.onNewGlobalObject = function () {
  log += 'n';
  throw 'party';
};

dbg1.uncaughtExceptionHook = dbg2.uncaughtExceptionHook = dbg3.uncaughtExceptionHook =
function (ex) {
  log += 'u';
  assertEq(ex, 'party');
  if (++count == 2)
    return { throw: 'fit' };
  return undefined;
};

log = '';
count = 0;
assertEq(typeof newGlobal(), 'object');
assertEq(log, 'nunu');
