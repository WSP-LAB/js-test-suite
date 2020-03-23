load("201224b0d1c296b45befd2285e95dd42.js");
// Debugger.Script throws when applied as a constructor.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

assertThrowsInstanceOf(function() { Debugger.Script(); }, TypeError);
assertThrowsInstanceOf(function() { new Debugger.Script(); }, TypeError);
