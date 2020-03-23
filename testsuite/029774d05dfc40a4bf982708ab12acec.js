load("201224b0d1c296b45befd2285e95dd42.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
load("de7a245d037cbe0336acdfcbd813dc8e.js");

var obj = {};

function strictAssignArgumentsElement(a)
{
  "use strict";
  arguments[0] = 42;
  return a;
}

for (var i = 0; i < 5; i++)
{
  assertEq(strictAssignArgumentsElement(), undefined);
  assertEq(strictAssignArgumentsElement(obj), obj);
  assertEq(strictAssignArgumentsElement(17), 17);
}
