load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: StopIteration
// Returning {throw:} from an onPop handler when yielding works and
// does closes the generator-iterator.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
dbg.onDebuggerStatement = function handleDebugger(frame) {
    frame.onPop = function (c) {
        return {throw: "fit"};
    };
};
g.eval("function g() { for (var i = 0; i < 10; i++) { debugger; yield i; } }");
g.eval("var it = g();");
var rv = gw.executeInGlobal("it.next();");
assertEq(rv.throw, "fit");

dbg.enabled = false;
g.it.next();
