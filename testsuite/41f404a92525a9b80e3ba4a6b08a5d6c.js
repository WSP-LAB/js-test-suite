load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError

g = newGlobal();
dbg = Debugger(g);
hits = 0;
dbg.onNewScript = function () { return hits++; };
assertEq(g.eval("eval('2 + 3')"), 5);
this.gczeal(hits,1);
dbg = Debugger(g);
g.h = function () {
  var env = dbg.getNewestFrame().environment;
  dbg =  0;
  assertThrowsInstanceOf;
}
g.eval("h()");
