load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var pattern = {};
pattern[Symbol.match] = function(string) {
  return string.length;
};
// Check object coercible fails.
assertThrows(() => String.prototype.match.call(null, pattern),
             TypeError);
// Override is called.
assertEquals(5, "abcde".match(pattern));
// Non-callable override.
pattern[Symbol.match] = "dumdidum";
assertThrows(() => "abcde".match(pattern), TypeError);

assertEquals("[Symbol.match]", RegExp.prototype[Symbol.match].name);