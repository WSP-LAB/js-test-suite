load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("1b3dbc1cddb6b5cc8ace501cab6be659.js");
// |reftest| skip
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

//-----------------------------------------------------------------------------
var BUGNUMBER = 600128;
var summary =
  "Properly handle attempted addition of properties to non-extensible objects";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var o = Object.freeze({});
for (var i = 0; i < 10; i++)
  print(o.u = "");

Object.freeze(this);
for (let j = 0; j < 10; j++)
  print(u = "");


/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("All tests passed!");
