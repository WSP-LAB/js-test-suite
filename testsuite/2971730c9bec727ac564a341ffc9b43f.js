load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| allow-oom

if (typeof oomTest !== "function")
  quit();

// Adapted from randomly chosen test: js/src/jit-test/tests/debug/Debugger-onNewGlobalObject-01.js
for (var i = 0; i < 9; ++i) {
  var dbg = new Debugger;
  dbg.onNewGlobalObject = function() {};
}
// jsfunfuzz-generated
oomTest(function() {
  newGlobal();
})
