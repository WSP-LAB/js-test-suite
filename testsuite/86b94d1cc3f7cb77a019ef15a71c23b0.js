load("201224b0d1c296b45befd2285e95dd42.js");
// An earlier onNewGlobalObject handler returning a 'throw' resumption
// value causes later handlers not to run.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var dbg1 = new Debugger;
var dbg2 = new Debugger;
var dbg3 = new Debugger;
var log;
var count;

dbg1.onNewGlobalObject = dbg2.onNewGlobalObject = dbg3.onNewGlobalObject = function (global) {
  count++;
  log += count;
  if (count == 2)
    return { throw: "snoo" };
  return undefined;
};
dbg2.uncaughtExceptionHook = function (exn) {
  assertEq(/disallowed/.test(exn), true);
  log += 'u';
};

log = '';
count = 0;
assertEq(typeof newGlobal(), "object");
assertEq(log, '12u3');
