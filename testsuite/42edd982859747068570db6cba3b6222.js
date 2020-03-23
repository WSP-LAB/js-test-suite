load("201224b0d1c296b45befd2285e95dd42.js");
// In a debugger with no debuggees, findObjects should return no objects.

var dbg = new Debugger;
assertEq(dbg.findObjects().length, 0);
