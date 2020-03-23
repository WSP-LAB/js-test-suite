load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("6b78370695c49b6074ed4ac9ff090dbd.js");
// Copyright (C) 2016 ecmascript_simd authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: constructor-properties
description: Test floating point SIMD operations.
includes: [simdUtilities.js]
---*/

simdTypes.filter(isFloatType).forEach(function(type) {
  testSimdFunction(type.name + ' div', function() {
    testBinaryOp(type, 'div', function(a, b) { return a / b; });
  });
  testSimdFunction(type.name + ' abs', function() {
    testUnaryOp(type, 'abs', Math.abs);
  });
  testSimdFunction(type.name + ' min', function() {
    testBinaryOp(type, 'min', Math.min);
  });
  testSimdFunction(type.name + ' max', function() {
    testBinaryOp(type, 'max', Math.max);
  });
  testSimdFunction(type.name + ' minNum', function() {
    testBinaryOp(type, 'minNum', minNum);
  });
  testSimdFunction(type.name + ' maxNum', function() {
    testBinaryOp(type, 'maxNum', maxNum);
  });
  testSimdFunction(type.name + ' sqrt', function() {
    testUnaryOp(type, 'sqrt', function(a) { return Math.sqrt(a); });
  });
  testSimdFunction(type.name + ' reciprocalApproximation', function() {
    testUnaryOp(type, 'reciprocalApproximation', function(a) { return 1 / a; });
  });
  testSimdFunction(type.name + ' reciprocalSqrtApproximation', function() {
    testUnaryOp(type, 'reciprocalSqrtApproximation', function(a) {
      return 1 / Math.sqrt(a); });
  });
})
