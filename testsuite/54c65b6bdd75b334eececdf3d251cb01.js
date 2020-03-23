load("201224b0d1c296b45befd2285e95dd42.js");
load("5e07573edde9c7ad8cf5db2a66f56d4d.js");

setJitCompilerOption("ion.warmup.trigger", 50);

function f() {
    var f1 = SIMD.Float32x4(1, 2, 3, 4);
    var i1 = SIMD.Int32x4(1, 2, -3, 4);
    var b1 = SIMD.Bool32x4(true, true, false, true);
    var i = 0;
    try {
        for (; i < 150; i++) {
            if (i > 148)
                i1 = f1;
            assertEqVec(SIMD.Int32x4.check(i1), i1);
            assertEqVec(SIMD.Float32x4.check(f1), f1);
            assertEqVec(SIMD.Bool32x4.check(b1), b1);
        }
    } catch (ex) {
        assertEq(i, 149);
        assertEq(ex instanceof TypeError, true);
    }
}

f();

