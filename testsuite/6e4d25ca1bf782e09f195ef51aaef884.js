load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 24.1.4.3
description: >
  Returns zero-length buffer if `start` index exceeds `end` index.
info: >
  ArrayBuffer.prototype.slice ( start, end )

  ...
  12. Let newLen be max(final-first,0).
  ...
---*/

var arrayBuffer = new ArrayBuffer(8);

var start = 5, end = 4;
var result = arrayBuffer.slice(start, end);
assert.sameValue(result.byteLength, 0);
