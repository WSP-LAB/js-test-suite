load("201224b0d1c296b45befd2285e95dd42.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
load("de7a245d037cbe0336acdfcbd813dc8e.js");

var obj = {};

function strictMaybeAssignOuterParam(p)
{
  "use strict";
  function inner() { p = 17; }
  return arguments;
}

var a1, a2, a3;
for (var i = 0; i < 5; i++)
{
  a1 = strictMaybeAssignOuterParam();
  a2 = strictMaybeAssignOuterParam(17);
  a3 = strictMaybeAssignOuterParam(obj);
}

assertEq(arraysEqual(a1, []), true);
assertEq(arraysEqual(a2, [17]), true);
assertEq(arraysEqual(a3, [obj]), true);
