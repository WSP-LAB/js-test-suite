load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


assertTrue(Array.isArray([]));
assertFalse(Array.isArray({}));
assertFalse(Array.isArray(null));

assertTrue(Array.isArray(new Proxy([], {})));
assertFalse(Array.isArray(new Proxy({}, {})));

assertTrue(Array.isArray(new Proxy(new Proxy([], {}), {})));
assertFalse(Array.isArray(new Proxy(new Proxy({}, {}), {})));
