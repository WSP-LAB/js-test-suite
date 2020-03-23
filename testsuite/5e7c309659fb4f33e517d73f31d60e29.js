load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Flags: --random-seed=-1101427159 --enable-slow-asserts --expose-wasm

(function __f_7() {
  assertThrows(() => new WebAssembly.Memory({initial: 59199}), RangeError);
})();
