load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */

// Check superficial features of Array.from.
var desc = Object.getOwnPropertyDescriptor(Array, "from");
assertEq(desc.configurable, true);
assertEq(desc.enumerable, false);
assertEq(desc.writable, true);
assertEq(Array.from.length, 1);
assertThrowsInstanceOf(() => new Array.from(), TypeError);  // not a constructor

if (typeof reportCompare === 'function')
    reportCompare(0, 0);
