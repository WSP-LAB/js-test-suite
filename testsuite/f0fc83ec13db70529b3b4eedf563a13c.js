load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 24.1.4.3
description: >
  ArrayBuffer.prototype.slice is extensible.
info: >
  ArrayBuffer.prototype.slice ( start, end )

  17 ECMAScript Standard Built-in Objects:
    Unless specified otherwise, the [[Extensible]] internal slot
    of a built-in object initially has the value true.
---*/

assert(Object.isExtensible(ArrayBuffer.prototype.slice));
