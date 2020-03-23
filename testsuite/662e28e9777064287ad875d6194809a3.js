load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function testMutatedPrimitiveToStringTag(primitive) {
  Object.defineProperty(
    primitive.__proto__, Symbol.toStringTag,
    {value: "bogus", configurable: true, writable: false, enumerable: false});
  assertEquals("[object bogus]", Object.prototype.toString.call(primitive));
}

testMutatedPrimitiveToStringTag('');
testMutatedPrimitiveToStringTag(true);
testMutatedPrimitiveToStringTag(42);
testMutatedPrimitiveToStringTag(42.42);
testMutatedPrimitiveToStringTag(Symbol());
