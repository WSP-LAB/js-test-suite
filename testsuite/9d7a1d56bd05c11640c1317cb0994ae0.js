load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("74295afcbe3851329365d06de2aa5a5e.js");
/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/publicdomain/zero/1.0/ */

var BUGNUMBER = 369778;
var summary =
  "RegExpStatics::makeMatch should make an undefined value when the last " +
  "match had an undefined capture.";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var expected = undefined;
var actual;

'x'.replace(/x(.)?/g, function(m, group) { actual = group; })

print("expected: " + expected)
print("actual: " + actual)

assertEq(expected, actual)

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

