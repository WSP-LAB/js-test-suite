load("201224b0d1c296b45befd2285e95dd42.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
load("de7a245d037cbe0336acdfcbd813dc8e.js");

function getLaterAssign(a)
{
  var o = arguments;
  a = 17;
  return o;
}

var a1, a2;
for (var i = 0; i < 5; i++)
  a1 = getLaterAssign(1);

assertEq(arraysEqual(a1, [17]), true);
