load("201224b0d1c296b45befd2285e95dd42.js");
var g1 = newGlobal();
var dbg = Debugger(g1);
g1.dbg = dbg;
g1.eval("function foo() { dbg.removeDebuggee(this); }");
g1.eval("function f() { try { throw 3; } catch(e) { foo(); } }\n");
g1.f();
