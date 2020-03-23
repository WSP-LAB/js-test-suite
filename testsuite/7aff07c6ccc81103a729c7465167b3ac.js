load("201224b0d1c296b45befd2285e95dd42.js");
assertEq(typeof Debugger.Memory, "function");
let dbg = new Debugger;
assertEq(dbg.memory instanceof Debugger.Memory, true);

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
assertThrowsInstanceOf(() => new Debugger.Memory, TypeError);
