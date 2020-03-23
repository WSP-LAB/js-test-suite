load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var global = 1;
global = 2;

function f() {
  var o = { a : 1 };
  global = "a";
  for (var i = global; i < 2; i++) {
    delete o[i];
  }
}

f();
