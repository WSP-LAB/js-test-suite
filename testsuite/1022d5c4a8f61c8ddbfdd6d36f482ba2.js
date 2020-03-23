load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

var a = 0;
function f() {
  // access a global variable to trigger the use of
  // typefeedback vector.
  return a;
}
%BaselineFunctionOnNextCall(f)
// We try to baseline a function that was not compiled before.
// It should setup the typefeedback data correctly.
f();
