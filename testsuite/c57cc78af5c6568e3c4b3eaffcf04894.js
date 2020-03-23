load("201224b0d1c296b45befd2285e95dd42.js");
// Debugger.Frame.prototype.live is false for frames that have thrown or been thrown through

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
g.debuggeeGlobal = this;
g.eval("var finalCheck;");
g.eval("(" + function () {
        var a = [];
        var dbg = Debugger(debuggeeGlobal);
        dbg.onDebuggerStatement = function (frame) {
            a.push(frame);
            for (var i = 0; i < a.length; i++)
                assertEq(a[i].live, true);
        };
        finalCheck = function (n) {
            assertEq(a.length, n);
            for (var i = 0; i < n; i++)
                assertEq(a[i].live, false);
        };
    } + ")()");

function f(n) {
    debugger;
    if (--n > 0)
        f(n);
    else
        throw "fit";
}

assertThrowsValue(function () { f(10); }, "fit");
g.finalCheck(10);
