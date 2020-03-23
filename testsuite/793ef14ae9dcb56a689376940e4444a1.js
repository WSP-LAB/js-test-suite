load("201224b0d1c296b45befd2285e95dd42.js");
load("c87c456240a1d89aa2414cb9d34d87f5.js");

// Prevent relazification triggered by some zeal modes. Relazification can cause
// test failures because lazy functions are XDR'd differently.
gczeal(0);

var test = "new class extends class { } { constructor() { super(); } }()";
evalWithCache(test, { assertEqBytecode : true });

var test = "new class { method() { super.toString(); } }().method()";
evalWithCache(test, { assertEqBytecode : true });
