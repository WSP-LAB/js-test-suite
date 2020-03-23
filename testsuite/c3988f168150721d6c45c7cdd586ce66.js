load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommonn.org/licenses/publicdomain/
 */

var BUGNUMBER = 738511;
var summary =
  "new Date(value) should call ToPrimitive on value before testing for " +
  "string-ness";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

assertEq(new Date(new String("2012-01-31T00:00:00.000Z")).valueOf(),
         1327968000000,
         "Date constructor passed a String object should parse it");

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("Tests complete");
