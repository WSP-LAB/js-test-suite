load("58b503bd09c74262366b2fa86d28cbbf.js");
load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --crankshaft --no-turbo

var Debug = debug.Debug
var exception = null;
var step = 0;

function listener(event, exec_state, event_data, data) {
  if (event != Debug.DebugEvent.Exception) return;
  try {
    step++;
  } catch (e) {
    exception = e;
  }
}

Debug.setBreakOnException();
Debug.setListener(listener);

(function () {
  "use asm";
  function f() {
    try {
      throw 666;
    } catch (e) {
    }
  }
  f();
  f();
  %OptimizeFunctionOnNextCall(f);
  f();
  assertOptimized(f);
})();

Debug.setListener(null);
assertNull(exception);
assertEquals(3, step);
