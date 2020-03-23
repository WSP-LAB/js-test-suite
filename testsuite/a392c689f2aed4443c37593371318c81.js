load("201224b0d1c296b45befd2285e95dd42.js");
// In a debugger with no debuggees, findScripts should return no scripts.

var dbg = new Debugger;
assertEq(dbg.findScripts().length, 0);
