load("201224b0d1c296b45befd2285e95dd42.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

function assignElementGetParameter(a)
{
  arguments[0] = 17;
  return a;
}

for (var i = 0; i < 5; i++)
  assertEq(assignElementGetParameter(42), 17);
