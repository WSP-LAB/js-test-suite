load("201224b0d1c296b45befd2285e95dd42.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
load("de7a245d037cbe0336acdfcbd813dc8e.js");

var obj = {};

function strictNestedAssignShadowCatchCall(p)
{
  "use strict";
  function inner()
  {
    try
    {
    }
    catch (p)
    {
      var f = function innermost() { p = 1776; return 12; };
      f();
    }
  }
  inner();
  return arguments;
}

var a1, a2, a3, a4;
for (var i = 0; i < 5; i++)
{
  a1 = strictNestedAssignShadowCatchCall();
  a2 = strictNestedAssignShadowCatchCall(99);
  a3 = strictNestedAssignShadowCatchCall("");
  a4 = strictNestedAssignShadowCatchCall(obj);
}

assertEq(arraysEqual(a1, []), true);
assertEq(arraysEqual(a2, [99]), true);
assertEq(arraysEqual(a3, [""]), true);
assertEq(arraysEqual(a4, [obj]), true);
