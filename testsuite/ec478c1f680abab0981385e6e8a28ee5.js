load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 4 -*- */
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var expect = "pass";
var actual;

// Scripts used to be limited to 2**20 blocks, but no longer since the frontend
// rewrite.  The exact limit-testing here should all pass now, not pass for
// 2**20 - 1 and fail for 2**20.
var s = "{}";
for (var i = 0; i < 21; i++)
    s += s;

try {
    eval(s);
    actual = "pass";
} catch (e) {
    actual = "fail: " + e;
}

assertEq(actual, expect);

s += s.slice(0, -4);

try {
    eval(s);
    actual = "pass";
} catch (e) {
    actual = "fail: " + e;
}

assertEq(actual, expect);

s += "{}";

try {
    eval(s);
    actual = "pass";
} catch (e) {
    actual = "fail: " + e;
}

assertEq(actual, expect);

reportCompare(0, 0, "ok");
