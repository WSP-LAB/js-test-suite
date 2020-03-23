load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("6b78370695c49b6074ed4ac9ff090dbd.js");
// Copyright (C) 2016 ecmascript_simd authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: simd-neg
description: Tests the unary '-' operation.
includes: [simdUtilities.js]
---*/

simdTypes.filter(isNumerical).forEach(function(type) {
  testSimdFunction(type.name + ' neg', function() {
    testUnaryOp(type, 'neg', function(a) { return -a; });
  });
});
