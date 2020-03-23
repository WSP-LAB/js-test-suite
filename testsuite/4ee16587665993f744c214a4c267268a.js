load("58b503bd09c74262366b2fa86d28cbbf.js");
load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

Debug = debug.Debug;

Debug.setListener(function() {});

function factory() {
  return function* generator() {
    debugger;
    yield 42;
  }
}

Debug.setBreakPoint(function(){}, 0, 0);
var generator = factory();
var obj = generator();
obj.next();
Debug.setBreakPoint(factory, 0, 0);
obj.next();
