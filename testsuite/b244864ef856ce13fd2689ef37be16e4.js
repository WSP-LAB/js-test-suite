load("201224b0d1c296b45befd2285e95dd42.js");
// We don't return objects where our query's class name is the prefix of the
// object's class name and vice versa.

var dbg = new Debugger();
var g = newGlobal();
var gw = dbg.addDebuggee(g);

assertEq(dbg.findObjects({ class: "Objec" }).length, 0);
assertEq(dbg.findObjects({ class: "Objectttttt" }).length, 0);
