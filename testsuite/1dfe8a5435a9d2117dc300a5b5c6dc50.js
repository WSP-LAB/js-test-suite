load("201224b0d1c296b45befd2285e95dd42.js");
// onExceptionUnwind returning undefined does not affect the thrown exception.

var g = newGlobal();
g.parent = this;
g.eval("new Debugger(parent).onExceptionUnwind = function () {};");

var obj = new Error("oops");
try {
    throw obj;
} catch (exc) {
    assertEq(exc, obj);
}
