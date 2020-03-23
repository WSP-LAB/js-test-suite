load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
// |reftest| skip-if(!xulRuntime.shell) -- needs newGlobal()
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

var g1 = newGlobal();
g1.evaluate("function f() { return f.caller; }");

var g2 = newGlobal();
g2.f = g1.f;

try
{
  g2.evaluate("function g() { 'use strict'; return f(); } g()");
  throw new Error("failed to throw");
}
catch (e)
{
  assertEq(e.constructor.name, "TypeError",
           "expected TypeError accessing strict .caller across globals, got " +
           e);
}

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("Tests complete");
