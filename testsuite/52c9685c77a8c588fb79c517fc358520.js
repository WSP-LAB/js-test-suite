load("201224b0d1c296b45befd2285e95dd42.js");
// Tests that invocation functions work.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("dfda922890520b97703f50db696d10f0.js");

var g = newGlobal();
var dbg = new Debugger();
var gw = dbg.addDebuggee(g);

g.eval(`
       function d() { debugger; }
       function f() { return 42; }
       var o = {
         get p() { return 42; },
         set p(x) { }
       };
       `);

var strs = ["f();", "o.p", "o.p = 42"];

var fw;
dbg.onDebuggerStatement = (frame) => {
  fw = frame.arguments[0];
};
gw.executeInGlobal("d(f)");
dbg.onDebuggerStatement = undefined;

function testHook(hookName) {
  var newestFrame = dbg.getNewestFrame();
  for (var s of strs) {
    if (newestFrame) {
      assertEq(newestFrame.eval(s).return, 42);
    }
    assertEq(gw.executeInGlobal(s).return, 42);
    assertEq(fw.apply(null).return, 42);
  }
}

testDebuggerHooksNX(dbg, g, testHook);
