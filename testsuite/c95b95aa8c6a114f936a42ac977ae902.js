load("201224b0d1c296b45befd2285e95dd42.js");
// Test that inJit eventually becomes truthy.
// This code should never timeout.

function callInJit() {
    return inJit();
};

function test() {
    // Test with OSR.
    while(!inJit());

    // Test with inlining.
    while(!callInJit());

    // Test with zealous gc preventing compilation.
    while(!inJit()) gc();
};

test();

