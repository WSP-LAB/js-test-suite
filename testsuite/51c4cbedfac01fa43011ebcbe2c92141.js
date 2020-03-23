load("201224b0d1c296b45befd2285e95dd42.js");
// Test that strict Debugger.Frame.eval has a correct static scope.
options('strict_mode');
var g = newGlobal();
var dbg = new Debugger(g);
var hits = 0;
dbg.onEnterFrame = function(f) {
  hits++;
  if (hits > 2)
    return;
  f.eval("42");
};
g.eval("42");
