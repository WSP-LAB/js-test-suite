load("201224b0d1c296b45befd2285e95dd42.js");
// An onNewPromise handler can disable itself.
if (!('Promise' in this))
    quit(0);

var g = newGlobal();
var dbg = new Debugger(g);
var log;

dbg.onNewPromise = function (promise) {
  log += 'n';
  dbg.onNewPromise = undefined;
};

log = '';
new g.Promise(function (){});
new g.Promise(function (){});
assertEq(log, 'n');
