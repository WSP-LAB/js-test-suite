load("201224b0d1c296b45befd2285e95dd42.js");
if (!("setGCCallback" in this))
    quit();

setGCCallback({
    action: "majorGC",
    phases: "both"
});
var g = newGlobal();
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
g.eval("function h() { debugger; }");
dbg.onDebuggerStatement = function(hframe) {
    var env = hframe.older.environment;
};
g.eval("h();");

