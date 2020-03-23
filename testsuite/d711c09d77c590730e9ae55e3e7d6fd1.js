load("201224b0d1c296b45befd2285e95dd42.js");
// {has,add,remove}Debuggee throw a TypeError if the argument is invalid.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var dbg = new Debugger;

function check(val) {
    assertThrowsInstanceOf(function () { dbg.hasDebuggee(val); }, TypeError);
    assertThrowsInstanceOf(function () { dbg.addDebuggee(val); }, TypeError);
    assertThrowsInstanceOf(function () { dbg.removeDebuggee(val); }, TypeError);
}

// Primitive values are invalid.
check(undefined);
check(null);
check(false);
check(1);
check(NaN);
check("ok");
check(Symbol("ok"));

// A Debugger.Object that belongs to a different Debugger object is invalid.
var g = newGlobal();
var dbg2 = new Debugger;
var w = dbg2.addDebuggee(g);
assertEq(w instanceof Debugger.Object, true);
check(w);
