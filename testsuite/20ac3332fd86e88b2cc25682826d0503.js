load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
// |reftest| skip-if(!xulRuntime.shell) -- uses shell load() function
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

//-----------------------------------------------------------------------------
var BUGNUMBER = 430133;
var summary = 'ES5 Object.defineProperty(O, P, Attributes): new definition';

print(BUGNUMBER + ": " + summary);

load("914239728a0cdbd3bf5249cec79ec8d2.js");

/**************
 * BEGIN TEST *
 **************/

try
{
  new TestRunner().runNotPresentTests();
}
catch (e)
{
  throw "Error thrown during testing: " + e +
          " at line " + e.lineNumber + "\n" +
        (e.stack
          ? "Stack: " + e.stack.split("\n").slice(2).join("\n") + "\n"
          : "");
}

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("Tests complete!");
