load("201224b0d1c296b45befd2285e95dd42.js");
var g = newGlobal();
g.eval("(" + function() {
    var o = {get x() {}};
    this.method = Object.getOwnPropertyDescriptor(o, "x").get;
    assertEq(isLazyFunction(method), true);
} + ")()");
var dbg = new Debugger();
var gw = dbg.addDebuggee(g);
var scripts = dbg.findScripts();
var methodv = gw.makeDebuggeeValue(g.method);
assertEq(scripts.indexOf(methodv.script) != -1, true);
