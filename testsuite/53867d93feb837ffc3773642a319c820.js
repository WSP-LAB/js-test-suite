load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var a = {};

function getter() {
  do {
    return a + 1;
  } while (false);
}

a.__proto__ = Error("");
a.__defineGetter__('message', getter);
assertThrows(()=>a.message, RangeError);
