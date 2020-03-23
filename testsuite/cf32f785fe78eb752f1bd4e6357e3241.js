load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var gTestfile = "for-of-var-with-initializer.js";
var BUGNUMBER = 1164741;
var summary = "Don't assert parsing |for (var x = 3 of 42);|";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

try
{
  Function("for (var x = 3 of 42);");
  throw new Error("didn't throw");
}
catch (e)
{
  assertEq(e instanceof SyntaxError, true,
           "expected syntax error, got: " + e);
}

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("Tests complete");
