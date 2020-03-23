load("201224b0d1c296b45befd2285e95dd42.js");
// Passing bad query properties to Debugger.prototype.findScripts throws.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var dbg = new Debugger();
var g = newGlobal();

assertThrowsInstanceOf(() => dbg.findObjects({ class: null }), TypeError);
assertThrowsInstanceOf(() => dbg.findObjects({ class: true }), TypeError);
assertThrowsInstanceOf(() => dbg.findObjects({ class: 1337 }), TypeError);
assertThrowsInstanceOf(() => dbg.findObjects({ class: /re/ }), TypeError);
assertThrowsInstanceOf(() => dbg.findObjects({ class: {}   }), TypeError);
