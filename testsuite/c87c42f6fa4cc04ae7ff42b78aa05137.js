load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var dummy = new ReferenceError("dummy");

constructors = [ ReferenceError, TypeError];

for (var i in constructors) {
  constructors[i].prototype.__defineGetter__("stack", function() {});
}

for (var i in constructors) {
  var obj = new constructors[i];
  obj.toString();
}
