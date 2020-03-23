load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2016 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Property type and descriptor. 
includes: [propertyHelper.js]
---*/

assert.sameValue(
  typeof Intl.DateTimeFormat.prototype.formatToParts,
  'function',
  '`typeof Intl.DateTimeFormat.prototype.formatToParts` is `function`'
);

verifyNotEnumerable(Intl.DateTimeFormat.prototype, 'formatToParts');
verifyWritable(Intl.DateTimeFormat.prototype, 'formatToParts');
verifyConfigurable(Intl.DateTimeFormat.prototype, 'formatToParts');
