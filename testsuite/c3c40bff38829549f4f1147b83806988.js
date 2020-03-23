load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("99af2c3994932cf7fcec8ec85c6dc330.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/publicdomain/zero/1.0/
 */

var gTestfile = "set-negative-offset.js";
//-----------------------------------------------------------------------------
var BUGNUMBER = 1140752;
var summary =
  "%TypedArray%.prototype.set must throw a RangeError when passed a negative " +
  "offset";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

try
{
  new Uint8Array().set([], -1);
  throw new Error("didn't throw at all");
}
catch (e)
{
  assertEq(e instanceof RangeError, true,
           "expected RangeError, instead got: " + e);
}

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("Tests complete");
