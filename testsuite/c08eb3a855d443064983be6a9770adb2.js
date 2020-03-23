load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --expose-wasm

// Ensure checked in wasm binaries used by integration tests from v8 hosts
// (such as chromium) are up to date.

(function print_incrementer() {
  if (true) return; // remove to regenerate the module

  load("0e11f61b08293f1182a506d61faebbd0.js");
  load("04f5c575f8cd734a07b2beedb1765d6e.js");

  var module = new WasmModuleBuilder();
  module.addFunction(undefined, kSig_i_i)
    .addBody([kExprGetLocal, 0, kExprI32Const, 1, kExprI32Add])
    .exportAs("increment");

  var buffer = module.toBuffer(true);
  var view = new Uint8Array(buffer);

  print("const unsigned char module[] = {");
  for (var i = 0; i < buffer.byteLength; i++) {
    print("  " + view[i] + ",");
  }
  print("};");
})();

(function ensure_incrementer() {
  var buff = readbuffer("test/mjsunit/wasm/incrementer.wasm");
  var mod = new WebAssembly.Module(buff);
  var inst = new WebAssembly.Instance(mod);
  var inc = inst.exports.increment;
  assertEquals(3, inc(2));
}())
