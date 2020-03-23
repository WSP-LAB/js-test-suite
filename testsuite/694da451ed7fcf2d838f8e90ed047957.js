load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --always-opt --expose-gc

function __f_0(message, a) {
  eval(), message;
  (function blue() {
    'use strict';
    eval(), eval(), message;
    gc();
  })();
}
__f_0();
