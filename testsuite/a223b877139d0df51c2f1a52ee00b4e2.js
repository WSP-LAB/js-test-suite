load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flass: --allow-natives-syntax --always-opt --gc-interval=163 --stress-compaction

try { a = f();
} catch(e) {
}
var i = 0;
function f() {
   try {
     f();
   } catch(e) {
     i++;
     [];
   }
}
f();
