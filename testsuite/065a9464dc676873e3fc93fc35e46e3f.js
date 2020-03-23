load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Flags: --expose-wasm

load("0e11f61b08293f1182a506d61faebbd0.js");
load("04f5c575f8cd734a07b2beedb1765d6e.js");

let module1 = (() => {
  let builder = new WasmModuleBuilder();
  builder.addMemory(1, 1);
  builder.addFunction('load', kSig_i_i)
      .addBody([kExprI32Const, 0, kExprI32LoadMem, 0, 0])
      .exportAs('load');
  return new WebAssembly.Module(builder.toBuffer());
})();

let module2 = (() => {
  let builder = new WasmModuleBuilder();
  builder.addMemory(1, 1);
  builder.addImport('A', 'load', kSig_i_i);
  builder.addExportOfKind('load', kExternalFunction, 0);
  return new WebAssembly.Module(builder.toBuffer());
})();

let instance1 = new WebAssembly.Instance(module1);
let instance2 = new WebAssembly.Instance(module2, {A: instance1.exports});

assertEquals(0, instance2.exports.load());
