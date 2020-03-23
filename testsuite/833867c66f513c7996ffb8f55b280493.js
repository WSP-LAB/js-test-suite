load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

function foo(x) {
  x = Math.clz32(x);
  return "a".indexOf("a", x);
}
foo(1);
foo(1);
%OptimizeFunctionOnNextCall(foo);
foo();
