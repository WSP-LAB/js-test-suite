load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("6b78370695c49b6074ed4ac9ff090dbd.js");
// Copyright (C) 2016 ecmascript_simd authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: simd-any-true
description: AllTrue returns true if all the SIMDElements are true.
includes: [simdUtilities.js]
---*/

function testAnyTrue(type) {
  assert.sameValue('function', typeof type.fn.anyTrue);
  // All lanes 'false'.
  var a = type.fn.splat(false);
  assert(!type.fn.anyTrue(a));
  // One lane 'true'.
  for (var i = 0; i < type.lanes; i++) {
    a = type.fn.replaceLane(a, i, true);
    assert(type.fn.anyTrue(a));
  }
  // All lanes 'true'.
  a = type.fn.splat(true);
  assert(type.fn.anyTrue(a));
}

simdTypes.filter(isBoolType).forEach(function(type) {
  testSimdFunction(type.name + ' anyTrue', function() {
    testAnyTrue(type, 'anyTrue');
  });
});
