load("201224b0d1c296b45befd2285e95dd42.js");
// Debuggers with enabled onExceptionUnwind hooks should not be GC'd even if
// they are otherwise unreachable.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
var actual = 0;
var expected = 0;

function f() {
    for (var i = 0; i < 20; i++) {
        var dbg = new Debugger(g);
        dbg.num = i;
        dbg.onExceptionUnwind = function (stack, exc) { actual += this.num; };
        expected += i;
    }
}

f();
gc();
assertThrowsValue(function () { g.eval("throw 'fit';"); }, "fit");
assertEq(actual, expected);
