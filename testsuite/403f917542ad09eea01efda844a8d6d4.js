load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
load("7313fa08969f1df598c154ed8ced2840.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var BUGNUMBER = 614603;
var summary = "RegExp.length";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

assertEq(RegExp.length, 2);
assertEq(/a/.constructor.length, 2);

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("All tests passed!");
