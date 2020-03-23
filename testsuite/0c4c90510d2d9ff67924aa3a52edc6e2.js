load("201224b0d1c296b45befd2285e95dd42.js");
// frame.eval throws if frame is a generator frame that isn't currently on the stack

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
g.eval("function gen(a) { debugger; yield a; }");
g.eval("function test() { debugger; }");
var dbg = new Debugger(g);
var genframe;
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    if (frame.callee.name == 'gen')
        genframe = frame;
    else
        assertThrowsInstanceOf(function () { genframe.eval("a"); }, Error);
    hits++;
};
g.eval("var it = gen(42); assertEq(it.next(), 42); test();");
assertEq(hits, 2);
