load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

//-----------------------------------------------------------------------------
var BUGNUMBER = 630770;
var summary =
  'Correctly warn about duplicate parameters when the strict option is enabled';

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

// Verify that duplicate parameters, with the strict option set, don't provoke
// an assertion.  Ideally we'd also verify that we warn exactly once per
// duplicated parameter name, but at present there's no way to test that
// without more effort (further customizing the shell JSErrorReporter) than we
// want to make now.
options("strict");
eval("function a(x, x, x, x) { }");

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("All tests passed!");
