load("201224b0d1c296b45befd2285e95dd42.js");
// Basic onExceptionUnwind hook test.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
var dbg = Debugger(g);
var hit = false;
dbg.onExceptionUnwind = function (frame, exc) {
    // onExceptionUnwind is called multiple times as the stack is unwound.
    // Only check the first hit.
    assertEq(arguments.length, 2);
    assertEq(frame instanceof Debugger.Frame, true);
    if (!hit) {
        assertEq(exc, 101);
        assertEq(frame.type, "call");
        assertEq(frame.callee.name, "f");
        assertEq(frame.older.type, "eval");
        hit = true;
    }
};

g.eval("function f() { throw 101; }");
assertThrowsValue(function () { g.eval("f();"); }, 101);
assertEq(hit, true);
