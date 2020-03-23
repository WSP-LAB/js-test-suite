load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax --no-fold-constants

function foo(x, y) {
  return Math.floor(x / y);
}

function bar(x, y) {
  return foo(x + 1, y + 1);
}

function baz() {
  bar(64, 2);
}

baz();
baz();
%OptimizeFunctionOnNextCall(baz);
baz();
