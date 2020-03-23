load("58b503bd09c74262366b2fa86d28cbbf.js");
load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

Debug = debug.Debug

listenerComplete = false;
breakPointCount = 0;

async function f() {
  await (async function() { var a = "a"; await 1; debugger; })();

  var b = "b";

  assertTrue(listenerDone);
  assertFalse(exception);
  assertEquals(1, breakpointCount);
}

function listener(event, exec_state, event_data, data) {
  try {
    if (event != Debug.DebugEvent.Break) return;

    breakpointCount++;
    listenerDone = true;
    assertEquals("a", exec_state.frame(0).evaluate("a"));
    assertEquals("b", exec_state.frame(1).evaluate("b"));
    assertEquals("c", exec_state.frame(2).evaluate("c"));
  } catch (e) {
    exception = e;
  };
};

Debug.setListener(listener);

var c = "c";
f();
