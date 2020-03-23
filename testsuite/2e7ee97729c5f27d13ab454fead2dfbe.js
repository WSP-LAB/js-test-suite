load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing descriptor property of Math.expm1
includes: [propertyHelper.js]
es6id: 20.2.2.15
---*/

verifyWritable(Math, "expm1");
verifyNotEnumerable(Math, "expm1");
verifyConfigurable(Math, "expm1");
