load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("74295afcbe3851329365d06de2aa5a5e.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

//-----------------------------------------------------------------------------
var BUGNUMBER = 548671;
var summary =
  "Don't use a shared-permanent inherited property to implement " +
  "[].length or (function(){}).length";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var a = [];
a.p = 1;
var x = Object.create(a);
assertEq(x.length, 0);
assertEq(x.p, 1);
assertEq(a.length, 0);

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("All tests passed!");
