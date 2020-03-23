load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
load("008eabf74323023a3b4794d71c356b14.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

var gTestfile = 'parse-mega-huge-array.js';
//-----------------------------------------------------------------------------
var BUGNUMBER = 667527;
var summary = "JSON.parse should parse arrays of essentially unlimited size";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var body = "0,";
for (var i = 0; i < 21; i++)
  body = body + body;
var str = '[' + body + '0]';

var arr = JSON.parse(str);
assertEq(arr.length, Math.pow(2, 21) + 1);

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("Tests complete");
