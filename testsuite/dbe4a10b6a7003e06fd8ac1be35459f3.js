load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

//-----------------------------------------------------------------------------
var BUGNUMBER = 664528;
var summary =
  "Sorting an array containing only holes and |undefined| should move all " +
  "|undefined| to the start of the array";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var a = [, , , undefined];
a.sort();

assertEq(a.hasOwnProperty(0), true);
assertEq(a[0], undefined);
assertEq(a.hasOwnProperty(1), false);
assertEq(a.hasOwnProperty(2), false);
assertEq(a.hasOwnProperty(3), false);

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("Tests complete");
