load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| --no-baseline

assertEq(inJit(), "Baseline is disabled.");
assertEq(inIon(), "Ion is disabled.");
