load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-boolean-constructor-boolean-value
es6id: 19.2.3.1
description: Default [[Prototype]] value derived from realm of the newTarget
info: |
    [...]
    2. If NewTarget is not undefined, let newTarget be NewTarget.
    [...]
    7. Let O be ? RegExpAlloc(newTarget).
    [...]

    9.1.14 GetPrototypeFromConstructor

    [...]
    3. Let proto be ? Get(constructor, "prototype").
    4. If Type(proto) is not Object, then
       a. Let realm be ? GetFunctionRealm(constructor).
       b. Let proto be realm's intrinsic object named intrinsicDefaultProto.
    [...]
features: [Reflect]
---*/

var other = $.createRealm().global;
var C = new other.Function();
C.prototype = null;

var o = Reflect.construct(RegExp, [], C);

assert.sameValue(Object.getPrototypeOf(o), other.RegExp.prototype);
