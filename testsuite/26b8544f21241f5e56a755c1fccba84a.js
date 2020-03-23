load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| slow
function x() {}
for (var j = 0; j < 9999; ++j) {
    (function() {
        x += x.watch("endsWith", ArrayBuffer);
        return 0 >> Function(x)
    })()
}
