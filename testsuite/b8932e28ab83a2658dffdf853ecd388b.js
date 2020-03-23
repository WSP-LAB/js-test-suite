load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --validate-asm --allow-natives-syntax

function __f_71(stdlib, buffer) {
  "use asm";
  var __v_22 = new stdlib.Float64Array(buffer);
  function __f_26() {
    __v_22 = __v_22;
  }
  return {__f_26: __f_26};
}

__f_71(this);
assertFalse(%IsAsmWasmCode(__f_71));
