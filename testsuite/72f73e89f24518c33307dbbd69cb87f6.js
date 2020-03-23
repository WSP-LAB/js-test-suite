load("201224b0d1c296b45befd2285e95dd42.js");
// Test that we can OSR with the same script on the stack multiple times.

var g = newGlobal();
var dbg = new Debugger;

g.toggle = function toggle() {
  dbg.addDebuggee(g);
  var frame = dbg.getNewestFrame();
}

g.eval("" + function f(x) {
  if (x == 0) {
    toggle();
    return;
  }
  f(x - 1);
});

g.eval("f(3);");
