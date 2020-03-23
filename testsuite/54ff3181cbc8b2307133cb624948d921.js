load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-@@iterator
description: Module namespace objects lack a Symbol.iterator property.
flags: [module]
features: [Symbol.iterator]
---*/

import * as ns from './Symbol.iterator.js';

assert.sameValue(Object.prototype.hasOwnProperty.call(ns, Symbol.iterator), false);
