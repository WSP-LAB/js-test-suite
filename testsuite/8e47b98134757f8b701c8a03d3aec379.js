load("201224b0d1c296b45befd2285e95dd42.js");
// findObjects' result includes objects captured by closures.

var g = newGlobal();
var dbg = new Debugger();
var gw = dbg.addDebuggee(g);

g.eval(`
  this.f = (function () {
    let a = { foo: () => {} };
    return () => a;
  }());
`);

let objects = dbg.findObjects();
let aw = gw.makeDebuggeeValue(g.f());
assertEq(objects.indexOf(aw) != -1, true);
