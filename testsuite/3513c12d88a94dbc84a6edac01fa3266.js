load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var BUGNUMBER = 612838;
var summary = "String.prototype.indexOf with empty searchString";

print(BUGNUMBER + ": " + summary);

assertEq("123".indexOf("", -1), 0);
assertEq("123".indexOf("", 0), 0);
assertEq("123".indexOf("", 1), 1);
assertEq("123".indexOf("", 3), 3);
assertEq("123".indexOf("", 4), 3);
assertEq("123".indexOf("", 12345), 3);

reportCompare(true, true);

print("All tests passed!");
