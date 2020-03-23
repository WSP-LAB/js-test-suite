load("201224b0d1c296b45befd2285e95dd42.js");
// Accessing a name that isn't a global property is a ReferenceError,
// even if a proxy is on the global's prototype chain.
load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("6ec98b17981f95f4363b8bc9869495e2.js");

var g = newGlobal();
if (globalPrototypeChainIsMutable())
  g.__proto__ = {};
assertThrowsInstanceOf(() => g.eval("s += ''"), g.ReferenceError);
