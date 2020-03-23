load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
load("008eabf74323023a3b4794d71c356b14.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

//-----------------------------------------------------------------------------
var BUGNUMBER = 578273;
var summary =
  "ES5: Properly detect cycles in JSON.stringify (throw TypeError, check for " +
  "cycles rather than imprecisely rely on recursion limits)";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

// objects

var count = 0;
var desc =
  {
    get: function() { count++; return obj; },
    enumerable: true,
    configurable: true
  };
var obj = Object.defineProperty({ p1: 0 }, "p2", desc);

try
{
  var str = JSON.stringify(obj);
  assertEq(false, true, "should have thrown, got " + str);
}
catch (e)
{
  assertEq(e instanceof TypeError, true,
           "wrong error type: " + e.constructor.name);
  assertEq(count, 1,
           "cyclic data structures not detected immediately");
}

count = 0;
var obj2 = Object.defineProperty({}, "obj", desc);
try
{
  var str = JSON.stringify(obj2);
  assertEq(false, true, "should have thrown, got " + str);
}
catch (e)
{
  assertEq(e instanceof TypeError, true,
           "wrong error type: " + e.constructor.name);
  assertEq(count, 2,
           "cyclic data structures not detected immediately");
}


// arrays

var count = 0;
var desc =
  {
    get: function() { count++; return arr; },
    enumerable: true,
    configurable: true
  };
var arr = Object.defineProperty([], "0", desc);

try
{
  var str = JSON.stringify(arr);
  assertEq(false, true, "should have thrown, got " + str);
}
catch (e)
{
  assertEq(e instanceof TypeError, true,
           "wrong error type: " + e.constructor.name);
  assertEq(count, 1,
           "cyclic data structures not detected immediately");
}

count = 0;
var arr2 = Object.defineProperty([], "0", desc);
try
{
  var str = JSON.stringify(arr2);
  assertEq(false, true, "should have thrown, got " + str);
}
catch (e)
{
  assertEq(e instanceof TypeError, true,
           "wrong error type: " + e.constructor.name);
  assertEq(count, 2,
           "cyclic data structures not detected immediately");
}

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("Tests complete");
