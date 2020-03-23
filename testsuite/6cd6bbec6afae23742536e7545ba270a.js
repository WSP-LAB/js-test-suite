load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.5.5
description: >
    Return target.[[GetOwnProperty]](P) if trap is undefined.
info: >
    [[GetOwnProperty]] (P)

    ...
    8. If trap is undefined, then
        a. Return target.[[GetOwnProperty]](P).
    ...
includes: [propertyHelper.js]
---*/

var target = {attr: 1};
var p = new Proxy(target, {});

var proxyDesc = Object.getOwnPropertyDescriptor(p, "attr");

verifyEqualTo(p, "attr", 1);
verifyWritable(p, "attr");
verifyEnumerable(p, "attr");
verifyConfigurable(p, "attr");
