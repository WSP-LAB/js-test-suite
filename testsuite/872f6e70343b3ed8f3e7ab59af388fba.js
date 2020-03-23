load("201224b0d1c296b45befd2285e95dd42.js");
// setVariable cannot create new global variables.
// (Other kinds of environment are tested in Environment-variables.js.)

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
var dbg = new Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    assertThrowsInstanceOf(function () { frame.environment.setVariable("x", 7); }, TypeError);
    hits++;
};
g.eval("debugger");
assertEq("x" in g, false);
assertEq(hits, 1);

