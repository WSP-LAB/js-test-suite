load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributor:
 *   Jeff Walden <jwalden+code@mit.edu>
 */

//-----------------------------------------------------------------------------
var BUGNUMBER = 518663;
var summary = 'Object.getOwnPropertyNames: regular expression objects';

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var actual = Object.getOwnPropertyNames(/a/);
var expected = ["lastIndex"];

for (var i = 0; i < expected.length; i++)
{
  reportCompare(actual.indexOf(expected[i]) >= 0, true,
                expected[i] + " should be a property name on a RegExp");
}

/******************************************************************************/

reportCompare(true, true);

print("All tests passed!");
