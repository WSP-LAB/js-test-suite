load("201224b0d1c296b45befd2285e95dd42.js");
setJitCompilerOption("ion.warmup.trigger", 50);
var f32 = new Float32Array(32);
f32[0] = 0;

function g(x) {
    eval(""); // don't inline
    return x + 4;
}

function f(n) {
    var x;
    if (n > 10000) {
        x = 4.5;
    } else {
        x = f32[0];
    }
    f32[0] = g(x);
}

for (var n = 0; n < 100; n++)
    f(n);

assertEq(f32[0], 400);
