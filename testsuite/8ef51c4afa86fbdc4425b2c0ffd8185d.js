load("e2371540d876710daf38e749390aa2a3.js");
//@ skip if $memoryLimited

"use strict"

// Based on André Bargull's test case.
// The test pass if it does not crash.
// see https://bugs.webkit.org/show_bug.cgi?id=158793.

function createRegexp() {
    var s = "a".repeat(0x3fffffff);
    var r = RegExp.prototype.toString.call({
        source: s,
        flags: s,
    });
    return [s, r];
}
try {
    createRegexp();
} catch (e) { }
debug("PASS: no crash");

load("cf1a0efae1078faee510f7bda78d4902.js");
