load("58b503bd09c74262366b2fa86d28cbbf.js");
load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


// Test that debug-evaluate doesn't crash when this is used before super() call
// in constructor.

Debug = debug.Debug

var result;

function listener(event, exec_state, event_data, data)
{
  try {
    if (event == Debug.DebugEvent.Break) {
      result = exec_state.frame(0).evaluate("this.a").value();
    }
  } catch (e) {
    result = e.message;
  }
}

Debug.setListener(listener);

class A { constructor () { this.a = 239; } }
class B extends A {
  constructor () {
    debugger;
    assertTrue(result.indexOf("Cannot read property 'a' of undefined") >= 0);
    super();
    debugger;
    assertEquals(239, result);
  }
}
new B();

Debug.setListener(null);
