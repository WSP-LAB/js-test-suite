load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function foo(a, i) {
  var o = [0.5,,1];
  a[i] = o[i];
}
var a1 = [0.1,0.1];
foo(a1, 0);
foo(a1, 1);
assertEquals(undefined, a1[1]);
