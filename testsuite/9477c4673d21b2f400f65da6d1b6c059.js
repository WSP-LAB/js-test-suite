load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributor:
 *   Jeff Walden <jwalden+code@mit.edu>
 */

//-----------------------------------------------------------------------------
var BUGNUMBER = 880591;
var summary =
  "Assertion redefining length property of a frozen dictionary-mode array";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

function convertToDictionaryMode(arr)
{
  Object.defineProperty(arr, 0, { configurable: true });
  Object.defineProperty(arr, 1, { configurable: true });
  delete arr[0];
}

var arr = [];
convertToDictionaryMode(arr);
Object.freeze(arr);
Object.defineProperty(arr, "length", {});

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("Tests complete");
