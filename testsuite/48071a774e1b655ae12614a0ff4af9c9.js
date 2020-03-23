load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("1b3dbc1cddb6b5cc8ace501cab6be659.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

//-----------------------------------------------------------------------------
var BUGNUMBER = 548671;
var summary =
  "Don't use a shared-permanent inherited property to implement " +
  "[].length or (function(){}).length";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var a = [1, 2, 3];
a.__proto__ = null;
reportCompare("length" in a, true, "length should be own property of array");
reportCompare(Object.hasOwnProperty.call(a, "length"), true,
              "length should be own property of array");
reportCompare(a.length, 3, "array length should be 3");

var a = [], b = [];
b.__proto__ = a;
reportCompare(b.hasOwnProperty("length"), true,
              "length should be own property of array");
b.length = 42;
reportCompare(b.length, 42, "should have mutated b's (own) length");
reportCompare(a.length, 0, "should not have mutated a's (own) length");


if (typeof reportCompare === "function")
  reportCompare(true, true);

print("All tests passed!");
