load("201224b0d1c296b45befd2285e95dd42.js");
load("5e07573edde9c7ad8cf5db2a66f56d4d.js");

setJitCompilerOption("ion.warmup.trigger", 50);

function f() {
    for (var i = 0; i < 150; i++) {
        assertEqX4(SIMD.Int32x4.splat(42),   [42, 42, 42, 42]);
        assertEqX4(SIMD.Float32x4.splat(42), [42, 42, 42, 42]);
        assertEqX4(SIMD.Bool32x4.splat(true), [true, true, true, true]);
        assertEqX4(SIMD.Bool32x4.splat(false), [false, false, false, false]);
    }
}

f();

