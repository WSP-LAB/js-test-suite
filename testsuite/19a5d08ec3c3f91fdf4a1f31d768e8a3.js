load("201224b0d1c296b45befd2285e95dd42.js");
// Eval-in-frame of optimized frames to break out of an infinite loop.

load("5f8e112e69147c44d5afba321a9d4ecf.js");

if (!jitTogglesMatch(Opts_IonEagerNoOffthreadCompilation))
  quit(0);

withJitOptions(Opts_IonEagerNoOffthreadCompilation, function () {
  var g = newGlobal();
  var dbg = new Debugger;

  g.eval("" + function f(d) { g(d); });
  g.eval("" + function g(d) { h(d); });
  g.eval("" + function h(d) {
    var i = 0;
    while (d)
      interruptIf(d && i++ == 4000);
  });

  setInterruptCallback(function () {
    dbg.addDebuggee(g);
    var frame = dbg.getNewestFrame();
    if (frame.callee.name != "h" || frame.implementation != "ion")
      return true;
    frame.eval("d = false;");
    return true;
  });

  g.eval("(" + function () {
    for (i = 0; i < 5; i++)
      f(false);
    f(true);
  } + ")();");
});
