load("201224b0d1c296b45befd2285e95dd42.js");
// If debugger.onEnterFrame returns {return:val}, the frame returns immediately.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
g.set = false;

var dbg = Debugger(g);
var savedFrame;
dbg.onDebuggerStatement = function (frame) {
    var innerSavedFrame;
    dbg.onEnterFrame = function (frame) {
        innerSavedFrame = frame;
        return null;
    };
    // Using frame.eval lets us catch termination.  
    assertEq(frame.eval("set = true;"), null);
    assertEq(innerSavedFrame.live, false);
    savedFrame = frame;
    return { return: "pass" };
};

savedFrame = undefined;
assertEq(g.eval("debugger;"), "pass");
assertEq(savedFrame.live, false);
assertEq(g.set, false);
