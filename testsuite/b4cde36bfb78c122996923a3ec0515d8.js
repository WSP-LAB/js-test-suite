load("201224b0d1c296b45befd2285e95dd42.js");
// Test removing hooks during dispatch.

var g = newGlobal();
var log = '';

function addDebug(n) {
    for (var i = 0; i < n; i++) {
        var dbg = new Debugger(g);
        dbg.num = i;
        dbg.onDebuggerStatement = function (stack) {
            log += this.num + ', ';
            this.enabled = false;
            this.onDebuggerStatement = undefined;
            gc();
        };
    }
    dbg = null;
}

addDebug(10);
g.eval("debugger;");
assertEq(log, '0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ');
