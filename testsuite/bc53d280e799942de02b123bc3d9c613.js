load("201224b0d1c296b45befd2285e95dd42.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
load("de7a245d037cbe0336acdfcbd813dc8e.js");

var obj = {};

function strictNestedAssignShadowFunctionCall(p)
{
  "use strict";
  function inner()
  {
    function p() { }
    p = 1776;
  }
  inner();
  return arguments;
}

var a1, a2, a3, a4;
for (var i = 0; i < 5; i++)
{
  a1 = strictNestedAssignShadowFunctionCall();
  a2 = strictNestedAssignShadowFunctionCall(99);
  a3 = strictNestedAssignShadowFunctionCall("");
  a4 = strictNestedAssignShadowFunctionCall(obj);
}

assertEq(arraysEqual(a1, []), true);
assertEq(arraysEqual(a2, [99]), true);
assertEq(arraysEqual(a3, [""]), true);
assertEq(arraysEqual(a4, [obj]), true);
