load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --expose-gc
a = [];
a[1000] = .1;
a.length = 0;
gc();
gc();
a[1000] = .1;
assertEquals(.1, a[1000]);
