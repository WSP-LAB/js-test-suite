load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

var a = [];
for (var i = -20; i < 0; ++i) {
  a[i] = 0;
}

function g() {
    [].push.apply(a, arguments);
}

function f() {
  g();
}

g();
g();
%OptimizeFunctionOnNextCall(f);
f();
