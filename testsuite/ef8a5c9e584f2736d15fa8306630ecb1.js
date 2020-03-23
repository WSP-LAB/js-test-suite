load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */

assertEq(typeof Symbol(), "symbol");
assertEq(typeof Symbol("ponies"), "symbol");
assertEq(typeof Symbol.for("ponies"), "symbol");

assertEq(typeof Object(Symbol()), "object");

if (typeof reportCompare === "function")
    reportCompare(0, 0);
