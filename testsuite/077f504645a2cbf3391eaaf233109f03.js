load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var m = (function(stdlib, foreign, heap) {
  "use asm";
  var MEM = new stdlib.Uint8Array(heap);
  function f(x) {
    x = x | 0;
    MEM[x] = 0;
  }
  return {f: f};
})(this, {}, new ArrayBuffer(1));
m.f(-926416896 * 32 * 1024);
