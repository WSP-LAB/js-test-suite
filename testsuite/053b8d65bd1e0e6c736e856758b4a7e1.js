load("58b503bd09c74262366b2fa86d28cbbf.js");
load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


// Test that hidden scopes are correctly walked in the scope chain.

var Debug = debug.Debug;
var exception = null;
var delegate = null;
var done = false;

function listener(event, exec_state, event_data, data) {
  if (event != Debug.DebugEvent.Break) return;
  try {
    assertEquals([ debug.ScopeType.Block,
                   debug.ScopeType.Script,
                   debug.ScopeType.Global ],
                 exec_state.frame(0).allScopes().map(s => s.scopeType()));
    done = true;
  } catch (e) {
    exception = e;
  }
}

Debug.setListener(listener);

for(let a = 0; a < 3; a++) {
  debugger;
  eval();  // Force context-allocation of everything.
}

Debug.setListener(null);
assertNull(exception);
assertTrue(done);
