load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("557a2aa517df980b770aad6faed1c24d.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

//-----------------------------------------------------------------------------
var BUGNUMBER = 1182373;
var summary =
  "Don't let constant-folding in the MemberExpression part of a tagged " +
  "template cause an incorrect |this| be passed to the callee";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var prop = "global";

var obj = { prop: "obj", f: function() { return this.prop; } };

assertEq(obj.f``, "obj");
assertEq((true ? obj.f : null)``, "global");

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("Tests complete");
