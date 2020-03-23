load("58b503bd09c74262366b2fa86d28cbbf.js");
load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


Debug = debug.Debug

var exception = null;

var f = () => { debugger; }
var g = function() { debugger; }
var h = (function() { return () => { debugger; }; }).call({});

function listener(event, exec_state, event_data, data) {
  if (event != Debug.DebugEvent.Break) return;
  try {
    assertThrows(() => exec_state.frame(0).evaluate("this = 2"));
  } catch (e) {
    exception = e;
    print("Caught something. " + e + " " + e.stack);
  };
};

Debug.setListener(listener);

f();
g();
g.call({});
h();

Debug.setListener(null);
assertNull(exception);
