load("201224b0d1c296b45befd2285e95dd42.js");
var g = newGlobal();
g.eval("function f(n) { for (var i = 0; i < n; i++) f(0); }");
g.f(10);
