load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2016 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Object.getOwnPropertyDescriptors should be writable, non-enumerable, and configurable
esid: sec-object.getownpropertydescriptors
author: Jordan Harband
includes: [propertyHelper.js]
---*/

verifyNotEnumerable(Object, 'getOwnPropertyDescriptors');
verifyWritable(Object, 'getOwnPropertyDescriptors');
verifyConfigurable(Object, 'getOwnPropertyDescriptors');
