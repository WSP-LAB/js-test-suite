load("58b503bd09c74262366b2fa86d28cbbf.js");
load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


'use strict';

var Debug = debug.Debug

var done = false;
var stepCount = 0;

function listener(event, execState, eventData, data) {
  if (event == Debug.DebugEvent.Break) {
    if (!done) {
      execState.prepareStep(Debug.StepAction.StepIn);
      var s = execState.frame().sourceLineText();
      assertTrue(s.indexOf('// ' + stepCount + '.') !== -1);
      stepCount++;
    }
  }
};

Debug.setListener(listener);

function GetBase() {
  var x = 1;   // 1.
  var y = 2;   // 2.
  done = true; // 3.
  return null;
}

function f() {
  class Derived extends GetBase() {} // 0.
}

var bp = Debug.setBreakPoint(f, 0);
f();
assertEquals(4, stepCount);

Debug.setListener(null);
