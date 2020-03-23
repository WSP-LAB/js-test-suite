load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
load("008eabf74323023a3b4794d71c356b14.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

var gTestfile = "stringify-replacer-array-trailing-holes.js";
//-----------------------------------------------------------------------------
var BUGNUMBER = 1217069;
var summary =
  "Better/more correct handling for replacer arrays with trailing holes " +
  "through which inherited elements might appear";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var obj = { 0: "hi", 1: "n-nao", 2: "run away!", 3: "bye" };

var s;

var replacer = [0, /* 1 */, /* 2 */, /* 3 */, ];

assertEq(JSON.stringify(obj, replacer),
         '{"0":"hi"}');

var nobj = new Number(0);
nobj.toString = () => { replacer[1] = 1; return 0; };
replacer[0] = nobj;

assertEq(JSON.stringify(obj, replacer),
         '{"0":"hi","1":"n-nao"}');

delete replacer[1];
replacer[0] = 0;

Object.prototype[0] = 0;
Object.prototype[1] = 1;
Object.prototype[2] = 2;
Object.prototype[3] = 3;

assertEq(JSON.stringify(obj, replacer),
         '{"0":"hi","1":"n-nao","2":"run away!","3":"bye"}');

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("Tests complete");
