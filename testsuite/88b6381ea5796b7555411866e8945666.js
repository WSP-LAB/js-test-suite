load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

load("0e11f61b08293f1182a506d61faebbd0.js");
load("04f5c575f8cd734a07b2beedb1765d6e.js");

(function() {
  var builder = new WasmModuleBuilder();
  builder.addMemory(31, 31, false);
  builder.addFunction('test', kSig_i_iii)
      .addBodyWithEnd([
        // body:
        kExprI64Const, 0x41, kExprI64Const, 0x41, kExprI64LtS, kExprI32Const,
        0x01, kExprI32StoreMem, 0x00, 0x41, kExprUnreachable,
        kExprEnd,  // @60
      ])
      .exportFunc();
  var module = builder.instantiate();
})();
