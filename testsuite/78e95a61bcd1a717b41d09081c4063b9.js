load("201224b0d1c296b45befd2285e95dd42.js");
// Resumption values other than |undefined| from uncaughtExceptionHook from
// onNewGlobalObject handlers are ignored (other than cancelling further hooks).

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var dbg = new Debugger;
var log;

dbg.onNewGlobalObject = function () {
  log += 'n';
  throw 'party';
};

dbg.uncaughtExceptionHook = function (ex) {
  log += 'u';
  assertEq(ex, 'party');
  return { throw: 'fit' };
};

log = '';
assertEq(typeof newGlobal(), 'object');
assertEq(log, 'nu');

dbg.uncaughtExceptionHook = function (ex) {
  log += 'u';
  assertEq(ex, 'party');
};

log = '';
assertEq(typeof newGlobal(), 'object');
assertEq(log, 'nu');
