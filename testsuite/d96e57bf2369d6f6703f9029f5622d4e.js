load("58b503bd09c74262366b2fa86d28cbbf.js");
load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


Debug = debug.Debug
var exception = null;

function listener(event, exec_state, event_data, data) {
  try {
    if (event == Debug.DebugEvent.Break) {
      exec_state.prepareStep(Debug.StepAction.StepIn);
    }
  } catch (e) {
    exception = e;
  }
}

Debug.setListener(listener);

function f(x) {
  if (x > 0) %_Call(f, null, x-1);
}

debugger;
f(2);

Debug.setListener(null);
assertNull(exception);
