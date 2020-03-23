load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("1b3dbc1cddb6b5cc8ace501cab6be659.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributor:
 *   Christian Holler <decoder@own-hero.net>
 */

//-----------------------------------------------------------------------------
var BUGNUMBER = 622167;
var summary = 'Handle infinite recursion';
print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

function eval() { eval(); }

function DoWhile_3()
{
  eval();
}

try
{
  DoWhile_3();
}
catch(e) { }

var r;
function f()
{
  r = arguments;
  test();
  yield 170;
}

function test()
{
  function foopy()
  {
    try
    {
      for (var i in f());
    }
    catch (e)
    {
      gc();
    }
  }
  foopy();
}
test();

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("All tests passed!");
