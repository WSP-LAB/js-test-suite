load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2016 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-string.prototype.padend
description: String#padEnd should have name property with value 'padEnd'
author: Jordan Harband
includes: [propertyHelper.js]
---*/

assert.sameValue(
    String.prototype.padEnd.name,
    'padEnd',
    'Expected String#padEnd.name to be "padEnd"'
);

verifyNotEnumerable(String.prototype.padEnd, 'name');
verifyNotWritable(String.prototype.padEnd, 'name');
verifyConfigurable(String.prototype.padEnd, 'name');
