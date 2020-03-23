load("201224b0d1c296b45befd2285e95dd42.js");
// uncaughtExceptionHook returns a resumption value.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
var dbg = new Debugger(g);
var rv;
dbg.onDebuggerStatement = function () { throw 15; };
dbg.uncaughtExceptionHook = function (exc) {
    assertEq(exc, 15);
    return rv;
};

// case 1: undefined
rv = undefined;
g.eval("debugger");

// case 2: throw
rv = {throw: 57};
var result;
assertThrowsValue(function () { g.eval("debugger"); }, 57);

// case 3: return
rv = {return: 42};
assertEq(g.eval("debugger;"), 42);
