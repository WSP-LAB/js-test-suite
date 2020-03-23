load("201224b0d1c296b45befd2285e95dd42.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
load("de7a245d037cbe0336acdfcbd813dc8e.js");

var obj = {};

/********************
 * STRICT ARGUMENTS *
 ********************/

function strictNestedAssignShadowVar(p)
{
  "use strict";
  function inner()
  {
    var p = 12;
    function innermost() { p = 1776; return 12; }
    return innermost();
  }
  return arguments;
}

assertEq(arraysEqual(strictNestedAssignShadowVar(), []), true);
assertEq(arraysEqual(strictNestedAssignShadowVar(99), [99]), true);
assertEq(arraysEqual(strictNestedAssignShadowVar(""), [""]), true);
assertEq(arraysEqual(strictNestedAssignShadowVar(obj), [obj]), true);

