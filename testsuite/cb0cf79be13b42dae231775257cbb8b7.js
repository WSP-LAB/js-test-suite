load("201224b0d1c296b45befd2285e95dd42.js");
// Test that new.target is acceptably usable in RematerializedFrames.

gczeal(0);

load("5f8e112e69147c44d5afba321a9d4ecf.js");

if (!jitTogglesMatch(Opts_Ion2NoOffthreadCompilation))
  quit();

withJitOptions(Opts_Ion2NoOffthreadCompilation, function () {
  var g = newGlobal();
  var dbg = new Debugger;

  g.toggle = function toggle(d, expected) {
    if (d) {
      dbg.addDebuggee(g);

      var frame = dbg.getNewestFrame();
      assertEq(frame.implementation, "ion");
      assertEq(frame.constructing, true);

      // CONGRATS IF THIS FAILS! You, proud saviour, have made new.target parse
      // in debug frame evals (presumably by hooking up static scope walks).
      // Uncomment the assert below for efaust's undying gratitude.
      // Note that we use .name here because of CCW nonsense.
      assertEq(frame.eval('new.target').throw.unsafeDereference().name, "SyntaxError");
      // assertEq(frame.eval('new.target').value.unsafeDereference(), expected);
    }
  };

  g.eval("" + function f(d) { new g(d, g, 15); });

  g.eval("" + function g(d, expected) { toggle(d, expected); });

  g.eval("(" + function test() {
    for (var i = 0; i < 5; i++)
      f(false);
    f(true);
  } + ")();");
});
