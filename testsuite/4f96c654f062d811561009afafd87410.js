load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: InternalError
var g = newGlobal();
var dbg = new Debugger(g);
g.eval("function f(n) { if (n == 0) debugger; else f(n - 1); }");
g.f("function f() { debugger; }");
