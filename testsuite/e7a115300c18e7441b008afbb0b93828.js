load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:123
var g = newGlobal();
g.eval('function f() { var y; debugger; }');

var dbg = new Debugger(g);

dbg.onDebuggerStatement = function handleDebugger(frame) {
    frame.onPop = function(c) {
	this.eval('y = 33');
	return {throw: 123};
    }
};

g.f();
