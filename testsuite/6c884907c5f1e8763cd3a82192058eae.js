load("58b503bd09c74262366b2fa86d28cbbf.js");
load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --invoke-weak-callbacks --omit-quit --gc-interval=355

var __v_33 = {};
__v_4 = 70000;
function __f_18() {
  if ((__v_7 % 50) != 0) {
  } else {
    return __v_33 + 0.5;
  }
}
function __f_17(a) {
  for (var __v_7= 0; __v_7 < __v_4; ++__v_7 ) {
    a[__v_7] = __f_18();
  }
}
for (var __v_7= 0; __v_7 < __v_4; __v_7 += 500 ) {
}
__v_9 = new Array();
__f_17(__v_9);
__v_9.length = 100;
Debug = debug.Debug
function __f_26() {
      }
__v_29 = "(function() {\
         })()";
