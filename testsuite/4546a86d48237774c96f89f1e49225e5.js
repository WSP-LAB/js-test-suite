load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError

var g = newGlobal();
g.parent = this;
g.eval("new Debugger(parent).onExceptionUnwind = function () { };");
enableGeckoProfiling();

try {
  // Only the ARM simulator supports single step profiling.
  enableSingleStepProfiling();
} catch (e) {
  throw new ReferenceError;
}

enableSingleStepProfiling();
a()
