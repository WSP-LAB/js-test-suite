load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */

assertEq(Symbol.keyFor(Symbol.for("moon")), "moon");
assertEq(Symbol.keyFor(Symbol.for("")), "");
assertEq(Symbol.keyFor(Symbol("moon")), undefined);
assertEq(Symbol.keyFor(Symbol.iterator), undefined);

assertThrowsInstanceOf(() => Symbol.keyFor(), TypeError);
assertThrowsInstanceOf(() => Symbol.keyFor(Object(Symbol("moon"))), TypeError);

assertEq(Symbol.keyFor.length, 1);

if (typeof reportCompare === "function")
    reportCompare(0, 0);
