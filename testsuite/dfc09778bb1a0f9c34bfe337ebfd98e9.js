load("58b503bd09c74262366b2fa86d28cbbf.js");
load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

let compileCount = 0;

const Debug = new DebugWrapper();

Debug.setListener(function(event, exec_state, event_data, data) {
  if (event != Debug.DebugEvent.AfterCompile) return;
  compileCount++;
});

Debug.enable();
assertTrue(compileCount != 0);

const compileCountAfterEnable = compileCount;

Debug.enable();  // Idempotent.
assertEquals(compileCountAfterEnable, compileCount);

Debug.disable();
assertEquals(compileCountAfterEnable, compileCount);

Debug.disable();  // Idempotent.
assertEquals(compileCountAfterEnable, compileCount);

Debug.enable();  // Re-enabling causes recompilation.
assertEquals(2 * compileCountAfterEnable, compileCount);
