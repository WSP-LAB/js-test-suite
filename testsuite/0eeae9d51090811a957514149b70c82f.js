load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("6b78370695c49b6074ed4ac9ff090dbd.js");
// Copyright (C) 2016 ecmascript_simd authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: pending
description: Test round trip.
includes: [simdUtilities.js]
---*/

testSimdFunction('Float32x4 Int32x4 round trip', function() {
  // NaNs should stay unmodified across bit conversions
  var m = SIMD.Int32x4(0xFFFFFFFF, 0xFFFF0000, 0x80000000, 0x0);
  var m2 = SIMD.Int32x4.fromFloat32x4Bits(SIMD.Float32x4.fromInt32x4Bits(m));
  equalInt32x4(m, m2);
});
