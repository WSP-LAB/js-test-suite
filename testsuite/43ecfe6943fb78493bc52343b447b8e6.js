load("201224b0d1c296b45befd2285e95dd42.js");
g = newGlobal();
dbg = Debugger(g);
dbg.onNewScript = function(script) { fscript = script.getChildScripts()[0]; }
g.eval("function f() { arguments[0]; }");
var hitBreakpoint = false;
fscript.setBreakpoint(0, {
    hit: function() {
	getBacktrace({ args: 1 });
	hitBreakpoint = true;
    }
});
g.f("");
assertEq(hitBreakpoint, true);
