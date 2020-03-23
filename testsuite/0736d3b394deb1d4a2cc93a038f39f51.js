load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| slow;

eval(" function x() {}" + Array(241).join(" "));
for (var i = 0; i < 100; i++) {
    gczeal(4, 2);
    String(x);
}
