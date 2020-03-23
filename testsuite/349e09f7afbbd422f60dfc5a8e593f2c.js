load("201224b0d1c296b45befd2285e95dd42.js");
// Tests that invocation functions work outside of Debugger code.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
var dbg = new Debugger();
var gw = dbg.addDebuggee(g);

g.eval(`
       function f() { debugger; return 42; }
       function f2() { return 42; }
       var o = {
         get p() { return 42; },
         set p(x) { }
       };
       `);

var strs = ["f(f2);", "o.p", "o.p = 42"];

var f2w;
dbg.onDebuggerStatement = (frame) => {
  f2w = frame.arguments[0];
};

for (var s of strs) {
  assertEq(gw.executeInGlobal(s).return, 42);
}
assertEq(f2w.apply(null).return, 42);
