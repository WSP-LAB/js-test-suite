load("58b503bd09c74262366b2fa86d28cbbf.js");
load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function bar(x) { debugger; }
function foo() { bar(arguments[0]); }
function wrap() { return foo(1); }

wrap();
wrap();
%OptimizeFunctionOnNextCall(wrap);

var Debug = debug.Debug;
Debug.setListener(function(event, exec_state, event_data, data) {
  if (event != Debug.DebugEvent.Break) return;
  for (var i = 0; i < exec_state.frameCount(); i++) exec_state.frame(i);
});

wrap();
