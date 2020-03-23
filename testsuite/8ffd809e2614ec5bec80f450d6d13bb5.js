load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError

var g = newGlobal();
g.parent = this;
g.eval("new Debugger(parent).onExceptionUnwind = function () {};");
Object.preventExtensions(this);
evaluate("function testcase() { }", { noScriptRval : true, isRunOnce: true });
