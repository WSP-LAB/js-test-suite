load("201224b0d1c296b45befd2285e95dd42.js");
// Debugger objects do not keep debuggee globals live.
var dbg = new Debugger;
for (var i = 0; i < 10; i++)
    dbg.addDebuggee(newGlobal());
gc();
assertEq(dbg.getDebuggees().length < 10, true);
