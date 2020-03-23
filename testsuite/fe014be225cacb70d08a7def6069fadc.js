load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var fuse = 1;

var handler = {
  get: function() { return function() {} },
  has() { return true },
  getOwnPropertyDescriptor: function() {
    if (fuse-- == 0) throw "please die";
    return {value: function() {}, configurable: true};
  }
};

var p = new Proxy({}, handler);
var o = Object.create(p);
with (o) { f() }
