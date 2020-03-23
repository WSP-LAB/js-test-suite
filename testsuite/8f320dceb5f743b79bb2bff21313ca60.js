load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("9f65b4024a3bba5864aa373908b00833.js");
// |reftest| skip-if(!xulRuntime.shell) -- needs gc (newGlobal/evaluate are shimmed)
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var gTestfile =
  "reentrant-RegExp-creation-and-gc-during-new-RegExp-pattern-ToString.js";
//-----------------------------------------------------------------------------
var BUGNUMBER = 1253099;
var summary =
  "Don't assert when, in |new RegExp(pat)|, stringifying |pat| creates " +
  "another RegExp and then performs a GC";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

// The fresh global object is required to ensure that the outer |new RegExp|
// is the first RegExp created in the global (other than RegExp.prototype).
newGlobal().evaluate(`
var createsRegExpAndCallsGCWhenStringified =
  {
    toString: function() {
      new RegExp("a");
      gc();
      return "q";
    }
  };

assertEq(new RegExp(createsRegExpAndCallsGCWhenStringified).source, "q");
`);

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("Tests complete");
