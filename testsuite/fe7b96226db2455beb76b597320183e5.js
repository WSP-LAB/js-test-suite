load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2017 Lyza Danger Gardner. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing descriptor property of Array.isArray
includes: [propertyHelper.js]
esid: sec-array.isarray
---*/

verifyWritable(Array, "isArray");
verifyNotEnumerable(Array, "isArray");
verifyConfigurable(Array, "isArray");
