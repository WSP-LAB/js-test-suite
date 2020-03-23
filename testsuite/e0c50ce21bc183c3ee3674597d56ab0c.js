load("201224b0d1c296b45befd2285e95dd42.js");
// We shouldn't hand out environment callees when we can only provide the
// internal function object, not the live function object. (We should never
// create Debugger.Object instances referring to internal function objects.)

var g = newGlobal();
var dbg = new Debugger(g);

dbg.onDebuggerStatement = function (frame) {
  assertEq(frame.older.environment.parent.callee, null);
}

g.evaluate(`

           function h() { debugger; }
           (function () {
             return function () {
               h();
               return 1;
             }
           })()();

           `);
