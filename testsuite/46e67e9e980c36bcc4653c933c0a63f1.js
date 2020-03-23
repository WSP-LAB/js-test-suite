load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

if (this.Intl) {
  v5 = new Intl.NumberFormat();
  v9 = new Intl.DateTimeFormat();
  v52 = v9["formatToParts"];
  var v55 = {};
  assertThrows(() => Reflect.apply(v52, v5, v55), TypeError);
}
