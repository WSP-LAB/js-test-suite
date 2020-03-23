load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

function bar(a) {
  delete a[1];
}

function foo(a) {
  var d;
  for (d in a) {
    assertFalse(d === undefined);
    bar(a);
  }
}

foo([1,2]);
foo([2,3]);
%OptimizeFunctionOnNextCall(foo);
foo([1,2]);
