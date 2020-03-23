load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

function c(p) {
  return {__proto__: p};
}
var p = {};
var o = c(p);
p.x = 0.6;
Object.defineProperty(p, "x", { writable: false });
