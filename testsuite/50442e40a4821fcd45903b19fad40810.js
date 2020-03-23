load("201224b0d1c296b45befd2285e95dd42.js");
// If a script is (re)lazified, findScripts should delazify it.

var dbg = new Debugger();

var g = newGlobal();
g.eval('function f(){}');
assertEq(g.eval('isLazyFunction(f)'), true);

dbg.addDebuggee(g);
dbg.findScripts();
assertEq(g.eval('isLazyFunction(f)'), false);

dbg.removeAllDebuggees();
relazifyFunctions();
assertEq(g.eval('isLazyFunction(f)'), true);

dbg.addDebuggee(g);
var scripts = dbg.findScripts();
assertEq(g.eval('isLazyFunction(f)'), false);
