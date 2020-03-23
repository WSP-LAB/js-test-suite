load("201224b0d1c296b45befd2285e95dd42.js");
// Array.prototype.reverse does a strict assignment to this.length even if the
// caller is nonstrict. Bug 886087.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

// obj[1] is read-only
var obj = {0: "zero", length: 2, reverse: [].reverse};
Object.defineProperty(obj, "1", {configurable: true, value: "one", writable: false});
assertThrowsInstanceOf(() => obj.reverse(), TypeError);

// obj[1] has only a getter
Object.defineProperty(obj, "1", {configurable: true, get: () => "one"});
assertThrowsInstanceOf(() => obj.reverse(), TypeError);
