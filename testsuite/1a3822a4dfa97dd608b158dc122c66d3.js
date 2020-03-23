load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-string.prototype.padstart
description: String#padStart should fail if given a Symbol fillString.
author: Jordan Harband
features: [Symbol]
---*/

assert.throws(TypeError, function () {
	'abc'.padStart(10, Symbol());
});
