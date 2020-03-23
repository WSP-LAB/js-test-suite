load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

function foo() {
  "use asm";
  var o = new Int32Array(64 * 1024);
  return () => { o[i1 >> 2] | 0; }
}
assertThrows(foo());
