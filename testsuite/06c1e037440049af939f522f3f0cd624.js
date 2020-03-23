load("201224b0d1c296b45befd2285e95dd42.js");
// Test that getting a function's environment can unlazify scripts.

var g = newGlobal();
g.eval('function f() { }');
var dbg = new Debugger;
var gw = dbg.makeGlobalObjectReference(g);
var fw = gw.getOwnPropertyDescriptor('f').value;
gc();
dbg.addDebuggee(g);
var fenv = fw.environment;
