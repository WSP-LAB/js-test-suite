load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --expose-wasm

load("0e11f61b08293f1182a506d61faebbd0.js");
load("04f5c575f8cd734a07b2beedb1765d6e.js");

(function TestFunctionPrototype() {
  var builder = new WasmModuleBuilder();

  var f = builder.addFunction("nine", kSig_i_v)
    .addBody([kExprI32Const, 9])
    .exportFunc();

  var func = builder.instantiate().exports.nine;

  // Check type and existence of prototype
  assertEquals("function", typeof func.apply);
  assertTrue(func.prototype != undefined);
  assertEquals(String(f.index), func.name);
  assertEquals(undefined, func.displayName);

  // Check that .apply() works.
  assertEquals(9, func.apply([]));
  assertEquals(9, func.apply([1]));
  assertEquals(9, func.apply([2, 3]));
  assertEquals(9, func.apply([6, 7, 9, 9]));

  // TODO(titzer): assertEquals(1, func.length);

  // Check we don't crash when converting to a string.
  print(func.toString());
})();
