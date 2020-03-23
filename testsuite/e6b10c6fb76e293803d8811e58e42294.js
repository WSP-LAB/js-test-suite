load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

var f = (a, b, ...c) => {
  print(a);
  print(b);
  print(c);
  assertEquals(6, a);
  assertEquals(5, b);
  assertEquals([4, 3, 2, 1], c);
};

function g() {
  f(6, 5, 4, 3, 2, 1);
};

g();
g();
g();

%OptimizeFunctionOnNextCall(g);
g();
