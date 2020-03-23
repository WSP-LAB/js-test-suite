load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --expose-gc

var p = {x:1};
__proto__ = p;
assertEquals(x, 1);
__proto__ = {x:13};
assertEquals(x, 13);
__proto__ = {x:42};
p = null;
gc();
assertEquals(x, 42);
