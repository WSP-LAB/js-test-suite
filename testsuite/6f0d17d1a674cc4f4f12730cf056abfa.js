load("201224b0d1c296b45befd2285e95dd42.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
load("de7a245d037cbe0336acdfcbd813dc8e.js");

var obj = {};

function strictNestedAssignShadowFunctionName(p)
{
  "use strict";
  function inner()
  {
    function p() { p = 1776; }
    p();
  }
  inner();
  return arguments;
}

var a1, a2, a3, a4, a5;
for (var i = 0; i < 5; i++)
{
  a1 = strictNestedAssignShadowFunctionName();
  a2 = strictNestedAssignShadowFunctionName(99);
  a3 = strictNestedAssignShadowFunctionName("");
  a4 = strictNestedAssignShadowFunctionName(obj);
}

assertEq(arraysEqual(a1, []), true);
assertEq(arraysEqual(a2, [99]), true);
assertEq(arraysEqual(a3, [""]), true);
assertEq(arraysEqual(a4, [obj]), true);
