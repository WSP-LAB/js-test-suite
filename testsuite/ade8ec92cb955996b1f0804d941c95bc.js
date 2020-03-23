load("201224b0d1c296b45befd2285e95dd42.js");
// If frame.onStep returns {throw:}, an exception is thrown in the debuggee.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
g.eval("function h() { debugger; }\n" +
       "function f() {\n" +
       "    h();\n" +
       "    return 'fail';\n" +
       "}\n");

var dbg = Debugger(g);
dbg.onDebuggerStatement = function (frame) {
    frame.older.onStep = function () { return {throw: "pass"}; };
};

assertThrowsValue(g.f, "pass");
