load("201224b0d1c296b45befd2285e95dd42.js");
// Array.prototype.pop does a strict assignment to this.length even if the
// caller is nonstrict. Bug 886087.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

// obj.length is read-only
var obj = {pop: [].pop, 0: "zero"};
Object.defineProperty(obj, "length", {configurable: true, value: 1, writable: false});
assertThrowsInstanceOf(() => obj.pop(), TypeError);

// obj.length has only a getter
obj = {pop: [].pop, 0: "zero", get length() { return 1; }};
assertThrowsInstanceOf(() => obj.pop(), TypeError);
