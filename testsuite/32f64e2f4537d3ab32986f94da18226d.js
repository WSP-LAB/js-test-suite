load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// MODULE
// Flags: --allow-natives-syntax --crankshaft

export let x = 0;
function foo() { x++ };
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
assertOptimized(foo);
assertEquals(2, x);