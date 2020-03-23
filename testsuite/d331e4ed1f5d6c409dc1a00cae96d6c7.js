load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

s1 = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
s1 += s1;
s1 += s1;
s1 += s1;
s1 += s1;

s0 = 'a';

function g() {
  for (var j = 0; j < 1000000; j++) {
    s0 += s1;
  }
}

try {
  g();
} catch (e) {
}

assertEquals('x', s0[10]);
