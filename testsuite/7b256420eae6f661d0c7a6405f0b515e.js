load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("2a038e91f6e5f6c7add968f0a7889dbd.js");
load("cb964fe54ef7245c321e0e470f72fd7c.js");
var BUGNUMBER = 896105;
var summary = 'ArrayBuffer.isView';

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

function runTests() {
  assertEq(ArrayBuffer.isView(), false);
  assertEq(ArrayBuffer.isView(undefined), false);
  assertEq(ArrayBuffer.isView(null), false);
  assertEq(ArrayBuffer.isView("primitive"), false);
  assertEq(ArrayBuffer.isView({}), false);
  assertEq(ArrayBuffer.isView([]), false);
  assertEq(ArrayBuffer.isView(new ArrayBuffer(10)), false);
  assertEq(ArrayBuffer.isView(new Int8Array(10)), true);
  assertEq(ArrayBuffer.isView(new Int8Array(10).subarray(0, 3)), true);
  if (typeof SharedArrayBuffer != "undefined") {
    assertEq(ArrayBuffer.isView(new SharedArrayBuffer(10)), false);
    assertEq(ArrayBuffer.isView(new Int8Array(new SharedArrayBuffer(10))), true);
    // In the next case subarray should return an ArrayBuffer, so this is
    // similar to the subarray test above.
    assertEq(ArrayBuffer.isView(new Int8Array(new SharedArrayBuffer(10)).subarray(0, 3)),
  	     true);
  }

  if (typeof reportCompare !== 'undefined')
    reportCompare(true, true);
  print("Tests complete");
}

runTests();
