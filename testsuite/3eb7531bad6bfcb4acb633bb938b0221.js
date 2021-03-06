load("58b503bd09c74262366b2fa86d28cbbf.js");
load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


var Debug = debug.Debug;
var exception = null;
var loop = true;

function listener(event, exec_state, event_data, data) {
  if (event != Debug.DebugEvent.Break) return;
  try {
    assertTrue(exec_state.frame(0).sourceLineText().indexOf("BREAK") > 0);
  } catch (e) {
    exception = e;
  }
}

function f() {     // BREAK
  return 1;
}

Debug.setListener(listener);

%ScheduleBreak();  // Break on function entry.
f();

Debug.setListener(null);
assertNull(exception);
