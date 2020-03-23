load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --expose-wasm

load("0e11f61b08293f1182a506d61faebbd0.js");
load("04f5c575f8cd734a07b2beedb1765d6e.js");

(function() {
  var builder = new WasmModuleBuilder();
  builder.addMemory(1, 32, false);
  builder.addFunction("foo", kSig_i_v)
    .addBody([
              kExprMemorySize, kMemoryZero,
              kExprI32Const, 0x10,
              kExprGrowMemory, kMemoryZero,
              kExprI32Mul,
              ])
              .exportFunc();
  var module = builder.instantiate();
  var result = module.exports.foo();
  assertEquals(1, result);
})();
