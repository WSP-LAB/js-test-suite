load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| crash

var opts = getJitCompilerOptions();
if (!opts['ion.enable'] || !opts['baseline.enable'] ||
    opts["ion.forceinlineCaches"] || opts["ion.check-range-analysis"])
{
    crash("Cannot test assertRecoveredOnBailout");
}

function g() {
    return inIon();
}

// Wait until IonMonkey compilation finished.
while(!(res = g()));

// Check that we entered Ion succesfully.
if (res !== true)
    crash("Cannot enter IonMonkey");

// Test that assertRecoveredOnBailout fails as expected.
function f () {
    var o = {};
    assertRecoveredOnBailout(o, false);
    return inIon();
}

// Wait until IonMonkey compilation finished.
while(!(res = f()));

// Ensure that we entered Ion.
assertEq(res, true);
