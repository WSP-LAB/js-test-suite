load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("2a038e91f6e5f6c7add968f0a7889dbd.js");
load("cb964fe54ef7245c321e0e470f72fd7c.js");
// |reftest| skip-if(!this.hasOwnProperty("TypedObject")||!xulRuntime.shell) -- needs TypedObject, detachArrayBuffer()
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var BUGNUMBER = 991981;
var summary =
  "Behavior of mapping from an array whose buffer is detached midway through " +
  "mapping";

function mapOneDimArrayOfUint8()
{
  var FourByteArray = TypedObject.uint8.array(4);
  var FourByteArrayArray = FourByteArray.array(4);

  var buf = new ArrayBuffer(16);
  var arr = new FourByteArrayArray(buf);

  var count = 0;
  assertThrowsInstanceOf(function()
  {
    arr.map(function(v)
    {
      if (count++ > 0)
        detachArrayBuffer(buf);
      return new FourByteArray();
    });
  }, TypeError, "mapping of a detached object worked?");
}

function runTests()
{
  print(BUGNUMBER + ": " + summary);

  mapOneDimArrayOfUint8();

  if (typeof reportCompare === "function")
    reportCompare(true, true);
  print("Tests complete");
}

runTests();
