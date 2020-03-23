load("58b503bd09c74262366b2fa86d28cbbf.js");
load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

Debug = debug.Debug;

let n = 0;
function listener(event, exec_state, event_data, data) {
  if (event == Debug.DebugEvent.Break) {
    if (n++ == 0) {
      Debug.setBreakPoint(main, 0, 0);
    }
  }
}

Debug.setListener(listener);

function main() {
  function* boo() {
    debugger;
    yield;
  }

  var gen = boo();
  gen.next();
  gen.next();
}

main();
