load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("74295afcbe3851329365d06de2aa5a5e.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 4 -*- */
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var x = 0;
var y = 1;
var g = 1;

var expect = "y";
var actual;

try {
    eval("y: while (x) break\n/y/g.exec('y')");
    actual = RegExp.lastMatch;
} catch (e) {
    actual = '' + e;
}
assertEq(actual, expect);

try {
    eval("y: while (x) continue\n/y/g.exec('y')");
    actual = RegExp.lastMatch;
} catch (e) {
    actual = '' + e;
}
assertEq(actual, expect);

reportCompare(0, 0, "ok");
