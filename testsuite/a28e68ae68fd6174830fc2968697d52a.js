load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax --turbo --turbo-escape

function f() {
  try {
    throw "boom";
  } catch(e) {
    %_DeoptimizeNow();
  }
}

f();
f();
%OptimizeFunctionOnNextCall(f);
f();
