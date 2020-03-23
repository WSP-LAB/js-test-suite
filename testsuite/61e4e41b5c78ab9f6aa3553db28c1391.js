load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

[].__defineSetter__(0, function() { });
function f(a,i,v) { a[i] = v; }
a = [0,0,0];
f(a,0,5);
a = new Float32Array(5);
f(a,2,5.5);
