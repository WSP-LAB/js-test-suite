load("201224b0d1c296b45befd2285e95dd42.js");
// Debugger.Frame preserves Ion frame identity

load("5f8e112e69147c44d5afba321a9d4ecf.js");

if (!jitTogglesMatch(Opts_Ion2NoOffthreadCompilation))
  quit();

withJitOptions(Opts_Ion2NoOffthreadCompilation, function () {
  var g = newGlobal();
  var dbg1 = new Debugger;
  var dbg2 = new Debugger;

  g.toggle = function toggle(x, d) {
    if (d) {
      dbg1.addDebuggee(g);
      dbg2.addDebuggee(g);
      var frame1 = dbg1.getNewestFrame();
      assertEq(frame1.environment.getVariable("x"), x);
      assertEq(frame1.implementation, "ion");
      frame1.environment.setVariable("x", "not 42");
      assertEq(dbg2.getNewestFrame().environment.getVariable("x"), "not 42");
    }
  };

  g.eval("" + function f(x, d) { toggle(x, d); });

  g.eval("(" + function test() {
    for (var i = 0; i < 5; i++)
      f(42, false);
    f(42, true);
  } + ")();");
});
