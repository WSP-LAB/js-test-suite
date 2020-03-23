load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("74295afcbe3851329365d06de2aa5a5e.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var BUGNUMBER = 523401;
var summary = 'identifier starts immediately after numeric literal';
var expect = "SyntaxError: identifier starts immediately after numeric literal";
var actual;

printBugNumber(BUGNUMBER);
printStatus(summary);

try {
    eval("actual = 0in [1]");
} catch (e) {
    actual = e;
}
actual = '' + actual;

reportCompare(expect, actual, summary);

printStatus("All tests passed!");
