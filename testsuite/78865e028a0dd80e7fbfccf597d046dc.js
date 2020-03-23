load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("9f65b4024a3bba5864aa373908b00833.js");
// |reftest| skip-if(!xulRuntime.shell) -- needs detachArrayBuffer()
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var gTestfile = "DataView-construct-arguments-detaching.js";
//-----------------------------------------------------------------------------
var BUGNUMBER = 991981;
var summary =
  "new DataView(...) shouldn't misbehave horribly if index-argument " +
  "conversion detaches the ArrayBuffer to be viewed";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

function testByteOffset()
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
    new DataView(ab, start);
  }
  catch (e)
  {
    ok = true;
  }
  assertEq(ok, true, "byteOffset weirdness should have thrown");
  assertEq(ab.byteLength, 0, "detaching should work for byteOffset weirdness");
}
testByteOffset();

function testByteLength()
{
  var ab = new ArrayBuffer(0x1000);

  var len =
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
    new DataView(ab, 0x800, len);
  }
  catch (e)
  {
    ok = true;
  }
  assertEq(ok, true, "byteLength weirdness should have thrown");
  assertEq(ab.byteLength, 0, "detaching should work for byteLength weirdness");
}
testByteLength();

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("Tests complete");
