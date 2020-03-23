load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

function g(a, b, c) {
  return a + b + c;
}

function f() {
  return g(1, (%_DeoptimizeNow(), 2), 3);
}

f();
f();
%OptimizeFunctionOnNextCall(f);
assertEquals(6, f());
