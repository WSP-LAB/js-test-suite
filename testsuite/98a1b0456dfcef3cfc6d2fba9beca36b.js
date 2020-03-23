load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax --crankshaft

function foo(a) {
  for (var d in a) {
    delete a[1];
  }
}

foo([1,2,3]);
foo([2,3,4]);
%OptimizeFunctionOnNextCall(foo);
foo([1,2,3]);
assertOptimized(foo);
