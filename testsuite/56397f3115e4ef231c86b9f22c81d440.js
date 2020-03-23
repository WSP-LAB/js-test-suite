load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 26.2.2.1.1
description: The `length` property of Proxy Revocation functions
info: >
  The length property of a Proxy revocation function is 0.

  17 ECMAScript Standard Built-in Objects:
    Unless otherwise specified, the length property of a built-in Function
    object has the attributes { [[Writable]]: false, [[Enumerable]]: false,
    [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

var revocationFunction = Proxy.revocable({}, {}).revoke;

assert.sameValue(revocationFunction.length, 0);

verifyNotEnumerable(revocationFunction, "length");
verifyNotWritable(revocationFunction, "length");
verifyConfigurable(revocationFunction, "length");
