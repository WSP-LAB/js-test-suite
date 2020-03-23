load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("1b3dbc1cddb6b5cc8ace501cab6be659.js");
// |reftest| skip-if(!xulRuntime.shell)
//
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

//-----------------------------------------------------------------------------
var BUGNUMBER = 622646;
var summary = "Shadowing an exception identifier in a catch block with a " +
              "|const| or |let| declaration should throw an error";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

options("strict");

function assertRedeclarationErrorThrown(expression)
{
  try
  {
    evaluate(expression);
    throw new Error("Redeclaration error wasn't thrown");
  }
  catch(e)
  {
    assertEq(e.message.indexOf("catch") > 0, true,
             "wrong error, got " + e.message);
  }
}

assertRedeclarationErrorThrown("try {} catch(e) { const e = undefined; }");
assertRedeclarationErrorThrown("try {} catch(e) { let e; }");

if (typeof reportCompare === "function")
  reportCompare(true, true);
