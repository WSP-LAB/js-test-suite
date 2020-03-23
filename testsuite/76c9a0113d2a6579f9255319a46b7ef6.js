load("201224b0d1c296b45befd2285e95dd42.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
load("de7a245d037cbe0336acdfcbd813dc8e.js");

var obj = {};

function strictAssignOuterParam(p)
{
  "use strict";
  function inner() { p = 17; }
  inner();
  return arguments;
}

var a1, a2, a3;
for (var i = 0; i < 5; i++)
{
  a1 = strictAssignOuterParam();
  a2 = strictAssignOuterParam(42);
  a3 = strictAssignOuterParam(obj);
}

assertEq(arraysEqual(a1, []), true);
assertEq(arraysEqual(a2, [42]), true);
assertEq(arraysEqual(a3, [obj]), true);
