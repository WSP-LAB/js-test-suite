load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

function foo()
{
  assertEq(foo.arguments.length, 0);
  assertEq(foo.caller, null);
}

assertEq(foo.arguments, null);
assertEq(foo.caller, null);
foo();
assertEq(foo.arguments, null);
assertEq(foo.caller, null);

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("Tests complete");
