load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

//-----------------------------------------------------------------------------
var BUGNUMBER = 620130;
var summary =
  "Calls to eval with same code + varying strict mode of script containing " +
  "eval == fail";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

function t(code) { return eval(code); }

assertEq(t("'use strict'; try { eval('with (5) 17'); } catch (e) { 'threw'; }"),
         "threw");
assertEq(t("try { eval('with (5) 17'); } catch (e) { 'threw'; }"),
         17);
assertEq(t("'use strict'; try { eval('with (5) 17'); } catch (e) { 'threw'; }"),
         "threw");

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("All tests passed!");
