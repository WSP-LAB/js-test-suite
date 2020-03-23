load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var g = -1073741824;

function f() {
  var x = g*g*g*g*g*g*g;
  for (var i = g; i < 1; ) {
    i += i * x;
  }
}

f();
