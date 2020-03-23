load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

//-----------------------------------------------------------------------------
var BUGNUMBER = 858381;
var summary = 'Object.freeze([]).pop() must throw a TypeError';

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

try
{
  Object.freeze([]).pop();
  throw new Error("didn't throw");
}
catch (e)
{
  assertEq(e instanceof TypeError, true,
           "should have thrown TypeError, instead got: " + e);
}

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("Tests complete");
