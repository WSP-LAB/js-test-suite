load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: already executing generator
// Forced return from a star generator frame.

load("19d7bc83becec11ee32c3a85fbc4d93d.js")
load("e2c808509c360663d6364e14c187fc8f.js")

var g = newGlobal();
g.debuggeeGlobal = this;
g.eval("var dbg = new Debugger(debuggeeGlobal);" +
       "dbg.onDebuggerStatement = function (frame) { return { return: frame.eval(\"({ done: true, value: '!' })\").return }; };");

function* gen() {
    yield '1';
    debugger;  // Force return here. The value is ignored.
    yield '2';
}
var iter = gen();
assertIteratorNext(iter, '1');
assertIteratorDone(iter, '!');
iter.next();
assertEq(0, 1);
