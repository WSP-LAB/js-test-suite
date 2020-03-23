load("e2371540d876710daf38e749390aa2a3.js");
//@ skip if $memoryLimited

"use strict"

// This test passes if it does not crash.
function createStrings() {
    let a = "a".repeat(0x7fffffff);
    if (a.length !== 0x7fffffff)
        debug("Failed to create a string of length 0x7ffffffff");

    a = "a".repeat(0x80000000);
    if (a.length !== 0x80000000)
        debug("Failed to create a string of length 0x80000000");

    a = "a".repeat(0x7fffffff - 2);
    if (a.length != 0x7fffffff - 2)
        debug("Failed to create a string of length 0x7fffffff - 2");

    let b = [a, 'b'];
    let c = b.toString();
    if (b.length !== 0x7ffffffff)
        debug("Failed to join a string of length 0x7ffffffff");

    a = "a".repeat(0x7fffffff - 1);
    if (a.length != 0x7fffffff - 1)
        debug("Failed to create a string of length 0x7fffffff - 1");

    b = [a, 'b'];
    c = b.toString();
    if (b.length !== 0x80000000)
        debug("Failed to join a string of length 0x80000000");
    return [a, b, c];
}
try {
    createStrings();
} catch (e) { }

debug("PASS: the test did not crash")


load("cf1a0efae1078faee510f7bda78d4902.js");
