load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("1b3dbc1cddb6b5cc8ace501cab6be659.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

//-----------------------------------------------------------------------------
var BUGNUMBER = 843004;
var summary =
  "Don't emit a strict warning for the undefined-property detection pattern in self-hosted code";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

options("strict", "werror");

// Don't strict-warn (and throw, because of strict) when self-hosted code uses
// detecting-safe undefined-property accesses (|options.weekday !== undefined|
// and similar in ToDateTimeOptions, to be precise).
new Date().toLocaleString("en-US", {});

// If we get here, the test passed.

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("Tests complete");
