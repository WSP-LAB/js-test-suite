load("201224b0d1c296b45befd2285e95dd42.js");
// Eval-in-frame with different type on non-youngest Ion frame.

load("5f8e112e69147c44d5afba321a9d4ecf.js");

if (!jitTogglesMatch(Opts_Ion2NoOffthreadCompilation))
  quit(0);

withJitOptions(Opts_Ion2NoOffthreadCompilation, function () {
  function test(shadow) {
    var g = newGlobal();
    var dbg = new Debugger;

    // Note that we depend on CCW scripted functions being opaque to Ion
    // optimization for this test.
    g.h = function h(d) {
      if (d) {
        dbg.addDebuggee(g);
        var f = dbg.getNewestFrame().older;
        assertEq(f.implementation, "ion");
        assertEq(f.environment.getVariable("foo"), 42);

        // EIF of a different type too.
        f.eval((shadow ? "var " : "") + "foo = 'string of 42'");
        g.expected = shadow ? 42 : "string of 42";
      }
    }

    g.eval("" + function f(d) {
      var foo = 42;
      g(d);
      return foo;
    });
    g.eval("" + function g(d) {
      h(d);
    });

    g.eval("(" + function () {
      for (i = 0; i < 5; i++)
        f(false);
      assertEq(f(true), "string of 42");
    } + ")();");
  }

  test(false);
  test(true);
});
