load("201224b0d1c296b45befd2285e95dd42.js");
// An onPromiseSettled handler can disable itself.
if (!('Promise' in this))
    quit(0);

var g = newGlobal();
var dbg = new Debugger(g);
var log;

dbg.onPromiseSettled = function (promise) {
  log += 's';
  dbg.onPromiseSettled = undefined;
};

log = '';
g.settlePromiseNow(new g.Promise(function (){}));
g.settlePromiseNow(new g.Promise(function (){}));
assertEq(log, 's');
