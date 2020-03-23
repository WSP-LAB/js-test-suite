load("201224b0d1c296b45befd2285e95dd42.js");
gczeal(2);
g = newGlobal();
dbg = Debugger(g);
function loop() {
  for (var i = 0; i < 10; i++)
    debugger;
}
g.eval(loop.toSource());
dbg.onDebuggerStatement = function(f) {
  f.script.getOffsetsCoverage();
}
dbg.collectCoverageInfo = true;
g.eval("loop")();
