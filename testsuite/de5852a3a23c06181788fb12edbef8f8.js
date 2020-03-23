load("201224b0d1c296b45befd2285e95dd42.js");
var g = newGlobal();
var dbg = new Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    var arr = frame.arguments;
    assertEq(arr[0].script instanceof Debugger.Script, true);
    assertEq(arr[1].script, undefined);
    assertEq(arr[2].script, undefined);
    hits++;
};

g.eval("(function () { debugger; })(function g(){}, {}, Math.atan2);");
assertEq(hits, 1);
