load("201224b0d1c296b45befd2285e95dd42.js");
// If debugger.onEnterFrame returns {throw:val}, an exception is thrown in the debuggee.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
g.set = false;
g.eval("function f() {\n" +
       "    set = true;\n" +
       "    return 'fail';\n" +
       "}\n");

var dbg = Debugger(g);
var savedFrame;
dbg.onEnterFrame = function (frame) {
    savedFrame = frame;
    return {throw: "pass"};
};

savedFrame = undefined;
assertThrowsValue(g.f, "pass");
assertEq(savedFrame.live, false);
assertEq(g.set, false);

savedFrame = undefined;
assertThrowsValue(function () { new g.f; }, "pass");
assertEq(savedFrame.live, false);
assertEq(g.set, false);

