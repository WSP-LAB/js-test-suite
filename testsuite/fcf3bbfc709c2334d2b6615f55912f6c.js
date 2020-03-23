load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| exitstatus: 3
try {
    terminate();
    assertEq("execution continued", "execution should not continue");
} catch (x) {
    assertEq("caught exception", "uncatchable");
} finally {
    assertEq("'finally' clause ran", "'finally' clause should not run");
}
assertEq("top-level execution continued", "top-level execution should not continue");
