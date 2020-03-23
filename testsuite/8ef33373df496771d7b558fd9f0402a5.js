load("201224b0d1c296b45befd2285e95dd42.js");
// getVariable that would trigger a getter does not crash or explode.
// It should throw WouldRunDebuggee, but that isn't implemented yet.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
var dbg = Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    assertThrowsInstanceOf(function () {
        frame.environment.parent.parent.getVariable("x");
    }, Error);
    hits++;
};
g.eval("Object.defineProperty(this, 'x', {get: function () { throw new Error('fail'); }});\n" +
       "debugger;");
assertEq(hits, 1);
