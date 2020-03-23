load("201224b0d1c296b45befd2285e95dd42.js");
// Test that inIon eventually becomes truthy.
// This code should never timeout.

function callInIon() {
    return inIon();
};

function test() {
    // Test with OSR.
    while(!inIon());

    // Test with inlining.
    while(!callInIon());

    // Test with zealous gc preventing compilation.
    while(!inIon()) gc();
};

test();

