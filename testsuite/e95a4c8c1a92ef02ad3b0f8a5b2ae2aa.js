load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Verify that the hasInstance symbol is installed on function prototype.
// Test262 makes deeper tests.

(function TestHasInstance() {
  var a = Array();
  assertTrue(Array[Symbol.hasInstance](a));
  assertFalse(Function.prototype[Symbol.hasInstance].call());
})();
