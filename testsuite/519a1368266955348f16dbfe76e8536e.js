load("201224b0d1c296b45befd2285e95dd42.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

function strictAssignParameterGetElement(a)
{
  "use strict";
  a = 17;
  return arguments[0];
}

for (var i = 0; i < 5; i++)
  assertEq(strictAssignParameterGetElement(42), 42);
