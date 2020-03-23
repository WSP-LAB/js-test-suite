load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommonn.org/licenses/publicdomain/
 */

var BUGNUMBER = 647385;
var summary =
  "Number.prototype.toString should use ToInteger on the radix and should " +
  "throw a RangeError if the radix is bad";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

function test(r)
{
  try
  {
    5..toString(r);
    throw "should have thrown";
  }
  catch (e)
  {
    assertEq(e instanceof RangeError, true, "expected a RangeError, got " + e);
  }
}
test(Math.pow(2, 32) + 10);
test(55);

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("All tests passed!");
