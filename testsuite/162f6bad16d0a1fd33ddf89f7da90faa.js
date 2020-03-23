load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2017 K. Adam White. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-number.prototype.tofixed
description: >
  Number.prototype.toFixed returns a string value
---*/

assert.sameValue(typeof (123.456).toFixed(), "string");
