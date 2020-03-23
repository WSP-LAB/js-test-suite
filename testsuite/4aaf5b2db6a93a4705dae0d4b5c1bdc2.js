load("924921a1ecafccfb4db6dd25ea7b14f2.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 21.2.5.9
description: The `lastIndex` value is restored following match execution
info: >
    [...]
    11. Let status be Set(rx, "lastIndex", previousLastIndex, true).
    [...]
features: [Symbol.search]
---*/

var latestValue;
var fakeRe = {
  get lastIndex() {
    return 86;
  },
  set lastIndex(_) {
    latestValue = _;
  },
  exec: function() {
    latestValue = null;
    return null;
  }
};

RegExp.prototype[Symbol.search].call(fakeRe);

assert.sameValue(latestValue, 86);
