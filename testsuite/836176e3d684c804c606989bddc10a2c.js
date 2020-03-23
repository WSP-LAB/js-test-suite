load("58b503bd09c74262366b2fa86d28cbbf.js");
load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


Debug = debug.Debug
var exception = null;
var break_count = 0;

var f = null;
var i = null;
function listener(event, exec_state, event_data, data) {
  try {
    if (event == Debug.DebugEvent.Break) {
      var frameMirror = exec_state.frame(0);

      var i = frameMirror.evaluate('f = function() { i = 5; }, f(), i').value();
      assertEquals(5, i);
    }
  } catch(e) {
    exception = e;
    print(e, e.stack);
  }
};

Debug.setListener(listener);

(function (){

  var i = 0;

  try {
    throw new Error();
  } catch (e) {
    assertEquals(0, i);
    debugger;
    assertEquals(5, i);
  }
}());

assertNull(exception);

assertNull(i);
f();
assertNull(i);

Debug.setListener(null);
