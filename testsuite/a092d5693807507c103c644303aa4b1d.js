load("58b503bd09c74262366b2fa86d28cbbf.js");
load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


var Debug = debug.Debug;

var exception = null;

function listener(event, exec_state, event_data, data) {
  if (event != Debug.DebugEvent.Break) return;
  try {
    var scope = exec_state.frame().scope(0);
    assertEquals(5, scope.scopeObject().property("i").value().value());
  } catch (e) {
    exception = e;
  }
}

function f() {
  eval('var i = 5');
  debugger;
}

f();
f();

%OptimizeFunctionOnNextCall(f);
Debug.setListener(listener);

f();

assertNull(exception);
