load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2016 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Intl.NumberFormat.prototype.formatToParts.length. 
includes: [propertyHelper.js]
---*/

assert.sameValue(Intl.NumberFormat.prototype.formatToParts.length, 0);

verifyNotEnumerable(Intl.NumberFormat.prototype.formatToParts, "length");
verifyNotWritable(Intl.NumberFormat.prototype.formatToParts, "length");
verifyConfigurable(Intl.NumberFormat.prototype.formatToParts, "length");
