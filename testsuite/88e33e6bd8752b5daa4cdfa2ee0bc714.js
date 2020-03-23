load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-string.prototype.padend
description: String#padEnd should work in the general case
author: Jordan Harband
---*/

assert.sameValue('abc'.padEnd(7, 'def'), 'abcdefd');
assert.sameValue('abc'.padEnd(5, '*'), 'abc**');

// surrogate pairs
assert.sameValue('abc'.padEnd(6, '\uD83D\uDCA9'), 'abc\uD83D\uDCA9\uD83D');
