load("58b503bd09c74262366b2fa86d28cbbf.js");
load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


var exception = null;

function listener(event, exec_state, event_data, data) {
  if (event != debug.Debug.DebugEvent.Break) return;
  try {
    var all_scopes = exec_state.frame().allScopes();
    assertEquals([ debug.ScopeType.Block,
                   debug.ScopeType.Local,
                   debug.ScopeType.Script,
                   debug.ScopeType.Global ],
                 all_scopes.map(scope => scope.scopeType()));
  } catch (e) {
    exception = e;
    print(e);
  }
}

debug.Debug.setListener(listener);

(function(arg, ...rest) {
  var one = 1;
  function inner() {
    one;
    arg;
  }
  debugger;
})();

debug.Debug.setListener(null);
assertNull(exception);
