load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * https://creativecommons.org/publicdomain/zero/1.0/
 */

var BUGNUMBER = 1076588;
var summary = "Object.freeze() should return its argument with no conversion when the argument is a primitive value";

print(BUGNUMBER + ": " + summary);
assertEq(Object.freeze(), undefined);
assertEq(Object.freeze(undefined), undefined);
assertEq(Object.freeze(null), null);
assertEq(Object.freeze(1), 1);
assertEq(Object.freeze("foo"), "foo");
assertEq(Object.freeze(true), true);
if (typeof Symbol === "function") {
    assertEq(Object.freeze(Symbol.for("foo")), Symbol.for("foo"));
}

if (typeof reportCompare === "function")
    reportCompare(true, true);
