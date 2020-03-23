load("201224b0d1c296b45befd2285e95dd42.js");
// If the offset parameter to setBreakpoint is invalid, throw an error.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
var dbg = new Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    // We assume at least one offset between 0 and frame.offset is invalid.
    assertThrowsInstanceOf(
        function () {
            for (var i = 0; i < frame.offset; i++)
                frame.script.setBreakpoint(i, {});
        },
        Error);
    hits++;
};
g.eval("x = 256; debugger;");
assertEq(hits, 1);
