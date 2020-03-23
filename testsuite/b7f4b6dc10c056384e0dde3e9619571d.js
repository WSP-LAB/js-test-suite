load("201224b0d1c296b45befd2285e95dd42.js");
// Test that eval-in-frame throws on accessing optimized out values.

load("5f8e112e69147c44d5afba321a9d4ecf.js");

if (!jitTogglesMatch(Opts_IonEagerNoOffthreadCompilation))
  quit(0);

withJitOptions(Opts_IonEagerNoOffthreadCompilation, function() {
  var dbgGlobal = newGlobal();
  var dbg = new dbgGlobal.Debugger();
  dbg.addDebuggee(this);

  function f() {
    assertEq(dbg.getNewestFrame().older.eval("print(a)").throw.unsafeDereference().toString(),
             "Error: variable `a' has been optimized out");
  }

  // Test optimized out binding in function scope.
  (function () {
    function a() {}
    for (var i = 0; i < 1; i++) f();
  })();

  // Test optimized out binding in block scope.
  (function () {
    {
      function a() {}
      for (var i = 0; i < 1; i++) f();
    }
  })();
});
