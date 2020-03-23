load("58b503bd09c74262366b2fa86d28cbbf.js");
load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


var Debug = debug.Debug;

function f() { g(); }

function g() { }

f();
f();
%OptimizeFunctionOnNextCall(f);
f();

Debug.setListener(function() {});
Debug.setBreakPoint(g, 0);

f();
