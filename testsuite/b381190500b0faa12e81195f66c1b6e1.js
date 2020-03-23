load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:Error

// Binary: cache/js-dbg-64-48e43edc8834-linux
// Flags:
//

function f() {
    frame = dbg.getNewestFrame();
}
var g = newGlobal();
g.f = function (a, b) { return a + "/" + this . f( ) ; };
var dbg = Debugger(g);
dbg.onDebuggerStatement = function (frame) {
    var f = frame.eval("f").return;
    assertEq(f.call(null, "a", "b").return, "a/b");
};
g.eval("debugger;");
