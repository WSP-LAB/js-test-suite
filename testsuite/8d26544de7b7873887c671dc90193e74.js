load("201224b0d1c296b45befd2285e95dd42.js");
// Tests that NX disallows debuggee execution for all the hooks.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("dfda922890520b97703f50db696d10f0.js");

var g = newGlobal();
var dbg = new Debugger(g);

// Attempts to call g.f without going through an invocation function should
// throw.
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

function testHook(hookName) {
  for (var h of handlers) {
    assertThrowsInstanceOf(h, Debugger.DebuggeeWouldRun);
  }
}

testDebuggerHooksNX(dbg, g, testHook);
