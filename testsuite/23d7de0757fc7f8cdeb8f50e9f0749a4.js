load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --expose-wasm

load("0e11f61b08293f1182a506d61faebbd0.js");
load("04f5c575f8cd734a07b2beedb1765d6e.js");

(function BasicTest() {
  var kReturnValue = 15;
  var builder = new WasmModuleBuilder();

  builder.addFunction("main", kSig_i_i)
    .addBody([kExprI32Const, kReturnValue])
    .exportFunc();

  var main = builder.instantiate().exports.main;
  assertEquals(kReturnValue, main());
})();
