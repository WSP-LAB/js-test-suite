load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributor:
 *   Jeff Walden <jwalden+code@mit.edu>
 */

//-----------------------------------------------------------------------------
var BUGNUMBER = 866700;
var summary = "Assertion redefining non-writable length to a non-numeric value";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var count = 0;

var convertible =
  {
    valueOf: function()
    {
      count++;
      return 0;
    }
  };

var arr = [];
Object.defineProperty(arr, "length", { value: 0, writable: false });

Object.defineProperty(arr, "length", { value: convertible });
assertEq(count, 2);

Object.defineProperty(arr, "length", { value: convertible });
assertEq(count, 4);

assertEq(arr.length, 0);

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("Tests complete");
