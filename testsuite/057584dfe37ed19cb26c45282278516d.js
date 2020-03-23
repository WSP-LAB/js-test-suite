load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("6b78370695c49b6074ed4ac9ff090dbd.js");
// Copyright (C) 2016 ecmascript_simd authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: simd-all-true
description: AllTrue returns true if all the SIMDElements are true.
includes: [simdUtilities.js]
---*/

function testAllTrue(type) {
  assert.sameValue('function', typeof type.fn.allTrue);
  // All lanes 'true'.
  var a = type.fn.splat(true);
  assert(type.fn.allTrue(a));
  // One lane 'false'.
  for (var i = 0; i < type.lanes; i++) {
    a = type.fn.replaceLane(a, i, false);
    assert(!type.fn.allTrue(a));
  }
  // All lanes 'false'.
  a = type.fn.splat(false);
  assert(!type.fn.allTrue(a));
}

simdTypes.filter(isBoolType).forEach(function(type) {
  testSimdFunction(type.name + ' allTrue', function() {
    testAllTrue(type, 'allTrue');
  });
});
