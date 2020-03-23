load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: out of memory

if (!('oomTest' in this))
  throw new Error("out of memory");

var dbg = new Debugger;
dbg.onNewGlobalObject = function(global) {
  dbg.memory.takeCensus({});
};
oomTest(function() {
  newGlobal({})
});
