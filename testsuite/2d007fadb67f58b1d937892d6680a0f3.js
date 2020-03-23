load("201224b0d1c296b45befd2285e95dd42.js");
var g = newGlobal();
var dbg = new Debugger(g);

try {
  g.eval("function f() { [1].map(function () {}); const x = 42; x = 43; } f();");
} catch (e) {
  // Ignore the syntax error.
}

dbg.findScripts();
