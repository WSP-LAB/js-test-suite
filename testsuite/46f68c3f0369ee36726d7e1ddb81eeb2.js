load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| slow
if (!('oomTest' in this))
    quit();

function f(x) {
    new Int32Array(x);
}

f(0);
oomTest(() => f(2147483647));
