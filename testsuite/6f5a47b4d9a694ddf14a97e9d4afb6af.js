load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
load("008eabf74323023a3b4794d71c356b14.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

var gTestfile = 'stringify-toJSON-arguments.js';
//-----------------------------------------------------------------------------
var BUGNUMBER = 584909;
var summary = "Arguments when an object's toJSON method is called";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var obj =
  {
    p: {
         toJSON: function(key)
         {
           assertEq(arguments.length, 1);
           assertEq(key, "p");
           return 17;
         }
       }
  };

assertEq(JSON.stringify(obj), '{"p":17}');

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("Tests complete");
