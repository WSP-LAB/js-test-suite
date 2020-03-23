load("201224b0d1c296b45befd2285e95dd42.js");
// Check that {throw:} resumption kills the current stack frame.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
g.debuggeeGlobal = this;
g.eval("(" + function () {
        var dbg = new Debugger(debuggeeGlobal);
        var prev = null;
        dbg.onDebuggerStatement = function (frame) {
            assertEq(frame === prev, false);
            if (prev)
                assertEq(prev.live, false);
            prev = frame;
            return {throw: debuggeeGlobal.i};
        };
    } + ")();");

function f() { debugger; }
for (var i = 0; i < 10; i++)
    assertThrowsValue(f, i);
