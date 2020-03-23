load("201224b0d1c296b45befd2285e95dd42.js");
// obj.defineProperty throws if a value, getter, or setter is not a debuggee value.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
var g = newGlobal();
var dbg = new Debugger;
var gobj = dbg.addDebuggee(g);
assertThrowsInstanceOf(function () { gobj.defineProperty('x', {value: {}}); }, TypeError);
assertThrowsInstanceOf(function () { gobj.defineProperty('x', {get: Number}); }, TypeError);
assertThrowsInstanceOf(function () { gobj.defineProperty('x', {get: gobj, set: Number}) },
                       TypeError);
