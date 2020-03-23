load("201224b0d1c296b45befd2285e95dd42.js");
load("6ec98b17981f95f4363b8bc9869495e2.js");

// Random chosen test: js/src/jit-test/tests/auto-regress/bug700295.js
if (globalPrototypeChainIsMutable()) {
  __proto__ = null;
  Object.prototype.__proto__ = this;
}

// Random chosen test: js/src/jit-test/tests/debug/Memory-takeCensus-05.js
Debugger(newGlobal()).memory.takeCensus();
