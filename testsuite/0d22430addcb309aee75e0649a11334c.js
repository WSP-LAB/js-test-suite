load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

%SetFlags("--gc-interval=1");

var key = "Huckleberry Finn" + "Tom Sawyer";
var o = {};
function f() { o[key] = "Adventures"; }

f();
f();
