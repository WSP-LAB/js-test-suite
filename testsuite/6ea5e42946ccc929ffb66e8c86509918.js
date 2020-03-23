load("58b503bd09c74262366b2fa86d28cbbf.js");
load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


// Test that debug-evaluate correctly collects free outer variables
// and does not get confused by variables in nested scopes.

Debug = debug.Debug

var exception = null;
function listener(event, exec_state, event_data, data) {
  if (event != Debug.DebugEvent.Break) return;
  try {
    assertThrows(() => exec_state.frame(0).evaluate("x").value());
  } catch (e) {
    exception = e;
    print(e + e.stack);
  }
}

Debug.setListener(listener);

(function() {
  var x = 1;     // context allocate x
  (() => x);
  (function() {
    var x = 2;   // stack allocate shadowing x
    (function() {
      {          // context allocate x in a nested scope
        let x = 3;
        (() => x);
      }
      debugger;
    })();
  })();
})();

Debug.setListener(null);
assertNull(exception);
