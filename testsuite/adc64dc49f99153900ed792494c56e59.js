load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
load("008eabf74323023a3b4794d71c356b14.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

var gTestfile = 'stringify-replacer-array-hijinks.js';
//-----------------------------------------------------------------------------
var BUGNUMBER = 648471;
var summary =
  "Better/more correct handling for replacer arrays with getter array index " +
  "properties";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var bigOdd = Math.pow(2, 50) + 1;

function two()
{
  return Math.random() < 0.5 ? 2 : "2";
}

assertEq(JSON.stringify({ 1: 1 }, [1, 1]), '{"1":1}');

assertEq(JSON.stringify({ 1: 1 }, [1, "1"]), '{"1":1}');

assertEq(JSON.stringify({ 1: 1 }, [1, bigOdd % two()]), '{"1":1}');

assertEq(JSON.stringify({ 1: 1 }, ["1", 1]), '{"1":1}');

assertEq(JSON.stringify({ 1: 1 }, ["1", "1"]), '{"1":1}');

assertEq(JSON.stringify({ 1: 1 }, ["1", bigOdd % two()]), '{"1":1}');

assertEq(JSON.stringify({ 1: 1 }, [bigOdd % two(), 1]), '{"1":1}');

assertEq(JSON.stringify({ 1: 1 }, [bigOdd % two(), "1"]), '{"1":1}');

assertEq(JSON.stringify({ 1: 1 }, [bigOdd % two(), bigOdd % two()]), '{"1":1}');


assertEq(JSON.stringify({ 1: 1 }, [1, new String(1)]), '{"1":1}');

assertEq(JSON.stringify({ 1: 1 }, [1, new Number(1)]), '{"1":1}');

assertEq(JSON.stringify({ 1: 1 }, ["1", new Number(1)]), '{"1":1}');

assertEq(JSON.stringify({ 1: 1 }, ["1", new String(1)]), '{"1":1}');

assertEq(JSON.stringify({ 1: 1 }, [bigOdd % two(), new Number(1)]), '{"1":1}');

assertEq(JSON.stringify({ 1: 1 }, [bigOdd % two(), new String(1)]), '{"1":1}');


assertEq(JSON.stringify({ 1: 1 }, [new String(1), new String(1)]), '{"1":1}');

assertEq(JSON.stringify({ 1: 1 }, [new String(1), new Number(1)]), '{"1":1}');

assertEq(JSON.stringify({ 1: 1 }, [new Number(1), new String(1)]), '{"1":1}');

assertEq(JSON.stringify({ 1: 1 }, [new Number(1), new Number(1)]), '{"1":1}');

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("Tests complete");
