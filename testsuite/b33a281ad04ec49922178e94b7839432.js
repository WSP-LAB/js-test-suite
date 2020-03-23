load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

function f(a, b) { return b + (a.x++); }
var o = {};
o.__defineGetter__('x', function() { return 1; });
assertEquals(4, f(o, 3));
assertEquals(4, f(o, 3));
%OptimizeFunctionOnNextCall(f);
assertEquals(4, f(o, 3));
