load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
load("008eabf74323023a3b4794d71c356b14.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

var gTestfile = 'stringify-nonarray-noncallable-replacer.js';
//-----------------------------------------------------------------------------
var BUGNUMBER = 653782;
var summary =
  "Treat non-array, non-callable replacers as if none had been specified";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var obj = { p: 2 };
var str = '{"p":2}';

assertEq(JSON.stringify(obj), str);
assertEq(JSON.stringify(obj, ["p"]), str);
assertEq(JSON.stringify(obj, null), str);
assertEq(JSON.stringify(obj, undefined), str);
assertEq(JSON.stringify(obj, 2), str);
assertEq(JSON.stringify(obj, Math.PI), str);
assertEq(JSON.stringify(obj, NaN), str);
assertEq(JSON.stringify(obj, true), str);
assertEq(JSON.stringify(obj, false), str);
assertEq(JSON.stringify(obj, Infinity), str);
assertEq(JSON.stringify(obj, "foopy"), str);
assertEq(JSON.stringify(obj, {}), str);
assertEq(JSON.stringify(obj, /abcd/), str);
assertEq(JSON.stringify(obj, new Boolean(true)), str);
assertEq(JSON.stringify(obj, new Number(42)), str);
assertEq(JSON.stringify(obj, new String("aequorin")), str);

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("Tests complete");
