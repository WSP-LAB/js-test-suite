load("58b503bd09c74262366b2fa86d28cbbf.js");
load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


var break_count = 0;
var exception = null;

function listener(event, exec_state, event_data, data) {
  if (event != Debug.DebugEvent.Break) return;
  try {
    var source_line = exec_state.frame(0).sourceLineText();
    print(source_line);
    exec_state.prepareStep(Debug.StepAction.StepIn);
    break_count++;
  } catch (e) {
    exception = e;
  }
}

var Debug = debug.Debug;
Debug.setListener(listener);


function f() {
  this.x = 1;
}

function g() {
  new f();
}

Debug.setBreakPoint(g, 6);

g();
Debug.setListener(null);

assertEquals(6, break_count);
assertNull(exception);
