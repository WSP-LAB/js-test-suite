load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var array = new Int8Array(10);
array[/\u007d\u00fc\u0043/] = 1.499
assertEquals(1.499, array[/\u007d\u00fc\u0043/]);
