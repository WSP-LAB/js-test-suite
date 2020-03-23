load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var gTestfile = 'array-inherited-__proto__.js';
var BUGNUMBER = 769041;
var summary =
  "The [[Prototype]] of an object whose prototype chain contains an array " +
  "isn't that array's [[Prototype]]";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var arr = [];
assertEq(Array.isArray(arr), true);
var objWithArrPrototype = Object.create(arr);
assertEq(!Array.isArray(objWithArrPrototype), true);
assertEq(objWithArrPrototype.__proto__, arr);
var objWithArrGrandPrototype = Object.create(objWithArrPrototype);
assertEq(!Array.isArray(objWithArrGrandPrototype), true);
assertEq(objWithArrGrandPrototype.__proto__, objWithArrPrototype);

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("Tests complete");
