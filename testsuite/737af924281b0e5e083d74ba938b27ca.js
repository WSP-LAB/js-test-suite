load("201224b0d1c296b45befd2285e95dd42.js");
// Tests that NX works through the enabled toggle and adding/removing the
// global.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("dfda922890520b97703f50db696d10f0.js");

var g = newGlobal();
var dbg = new Debugger(g);

g.eval(`
       function f() { }
       var o = {
         get p() { },
         set p(x) { }
       };
       `);

var handlers = [() => { g.f(); },
                () => { g.o.p } ,
                () => { g.o.p = 42; }];

function testHookEnabled(hookName, trigger) {
  for (var h of handlers) {
    assertThrowsInstanceOf(h, Debugger.DebuggeeWouldRun);
    dbg.enabled = false;
    h();
    dbg.enabled = true;
    assertThrowsInstanceOf(h, Debugger.DebuggeeWouldRun);
  }
}

function testHookRemoval(hookName, trigger) {
  for (var h of handlers) {
    assertThrowsInstanceOf(h, Debugger.DebuggeeWouldRun);
    dbg.removeDebuggee(g);
    h();
    dbg.addDebuggee(g);
    assertThrowsInstanceOf(h, Debugger.DebuggeeWouldRun);
  }
}

testDebuggerHooksNX(dbg, g, testHookEnabled);
testDebuggerHooksNX(dbg, g, testHookRemoval);
