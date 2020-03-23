load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("9f65b4024a3bba5864aa373908b00833.js");
// |reftest| skip-if(!xulRuntime.shell) -- needs detachArrayBuffer()
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var gTestfile = "ArrayBuffer-slice-arguments-detaching.js";
//-----------------------------------------------------------------------------
var BUGNUMBER = 991981;
var summary =
  "ArrayBuffer.prototype.slice shouldn't misbehave horribly if " +
  "index-argument conversion detaches the ArrayBuffer being sliced";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

function testStart()
{
  var ab = new ArrayBuffer(0x1000);

  var start =
    {
      valueOf: function()
      {
        detachArrayBuffer(ab);
        gc();
        return 0x800;
      }
    };

  var ok = false;
  try
  {
    ab.slice(start);
  }
  catch (e)
  {
    ok = true;
  }
  assertEq(ok, true, "start weirdness should have thrown");
  assertEq(ab.byteLength, 0, "detaching should work for start weirdness");
}
testStart();

function testEnd()
{
  var ab = new ArrayBuffer(0x1000);

  var end =
    {
      valueOf: function()
      {
        detachArrayBuffer(ab);
        gc();
        return 0x1000;
      }
    };

  var ok = false;
  try
  {
    ab.slice(0x800, end);
  }
  catch (e)
  {
    ok = true;
  }
  assertEq(ok, true, "byteLength weirdness should have thrown");
  assertEq(ab.byteLength, 0, "detaching should work for byteLength weirdness");
}
testEnd();

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("Tests complete");
