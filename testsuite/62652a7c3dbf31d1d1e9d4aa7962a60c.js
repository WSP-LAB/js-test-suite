load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

function h(y) { return y.u; }

function g() { return h.apply(0, arguments); }

function f(x) {
  var o = { u : x };
  return g(o);
}

f(42);
f(0.1);

%OptimizeFunctionOnNextCall(f);

assertEquals(undefined, f(undefined));
