load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-date.prototype.getutcmmilliseconds
es6id: 20.3.4.16
description: Return value for valid dates
info: |
  1. Let t be ? thisTimeValue(this value).
  2. If t is NaN, return NaN.
  3. Return msFromTime(t).
---*/

var july6 = 1467763200000;

assert.sameValue(new Date(july6).getUTCMilliseconds(), 0, 'first millisecond');
assert.sameValue(
  new Date(july6 - 1).getUTCMilliseconds(), 999, 'previous millisecond'
);
assert.sameValue(
  new Date(july6 + 999).getUTCMilliseconds(), 999, 'final millisecond'
);
assert.sameValue(
  new Date(july6 + 1000).getUTCMilliseconds(), 0, 'subsequent millisecond'
);
