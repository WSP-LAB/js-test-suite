load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("6b78370695c49b6074ed4ac9ff090dbd.js");
// Copyright (C) 2016 ecmascript_simd authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: constructor-properties
description: Test SIMD Logical operations.
includes: [simdUtilities.js]
---*/

simdTypes.filter(isLogical).forEach(function(type) {
  testSimdFunction(type.name + ' and', function() {
    testBinaryOp(type, 'and', function(a, b) { return a & b; });
  });
  testSimdFunction(type.name + ' or', function() {
    testBinaryOp(type, 'or', function(a, b) { return a | b; });
  });
  testSimdFunction(type.name + ' xor', function() {
    testBinaryOp(type, 'xor', function(a, b) { return a ^ b; });
  });
});
