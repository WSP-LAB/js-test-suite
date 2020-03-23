load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

//-----------------------------------------------------------------------------
var BUGNUMBER = 609256;
var summary =
  "Don't crash doing a direct eval when eval doesn't resolve to an object " +
  "(let alone the original eval function)";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var eval = "";
try
{
  eval();
  throw new Error("didn't throw?");
}
catch (e)
{
  assertEq(e instanceof TypeError, true);
}

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("All tests passed!");
