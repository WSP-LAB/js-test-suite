load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("557a2aa517df980b770aad6faed1c24d.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

//-----------------------------------------------------------------------------
var BUGNUMBER = 894026;
var summary = "Implement ES6 octal literals";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var chars = ['o', 'O'];

for (var i = 0; i < 8; i++)
{
  if (i === 8)
  {
    chars.forEach(function(v)
    {
      try
      {
        eval('0' + v + i);
        throw "didn't throw";
      }
      catch (e)
      {
        assertEq(e instanceof SyntaxError, true,
                 "no syntax error evaluating 0" + v + i + ", " +
                 "got " + e);
      }
    });
    continue;
  }

  for (var j = 0; j < 8; j++)
  {
    if (j === 8)
    {
      chars.forEach(function(v)
      {
        try
        {
          eval('0' + v + i + j);
          throw "didn't throw";
        }
        catch (e)
        {
          assertEq(e instanceof SyntaxError, true,
                   "no syntax error evaluating 0" + v + i + j + ", " +
                   "got " + e);
        }
      });
      continue;
    }

    for (var k = 0; k < 8; k++)
    {
      if (k === 8)
      {
        chars.forEach(function(v)
        {
          try
          {
            eval('0' + v + i + j + k);
            throw "didn't throw";
          }
          catch (e)
          {
            assertEq(e instanceof SyntaxError, true,
                     "no syntax error evaluating 0" + v + i + j + k + ", " +
                     "got " + e);
          }
        });
        continue;
      }

      chars.forEach(function(v)
      {
        assertEq(eval('0' + v + i + j + k), i * 64 + j * 8 + k);
      });
    }
  }
}

// Off-by-one check: '/' immediately precedes '0'.
assertEq(0o110/2, 36);
assertEq(0O644/2, 210);

function strict()
{
  "use strict";
  return 0o755;
}
assertEq(strict(), 7 * 64 + 5 * 8 + 5);

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("Tests complete");
