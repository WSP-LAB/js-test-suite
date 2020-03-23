load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| exitstatus: 3

// This test case was found by the fuzzer and crashed the js shell. It should
// throw a "too much recursion" error, but was crashing instead.

enableTrackAllocations();
function f() {
    f();
}
f();
