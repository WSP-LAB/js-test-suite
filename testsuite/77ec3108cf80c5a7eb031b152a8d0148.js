load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.2.5.9
description: >
    When a valid IdentifierReference appears in an object initializer, a new
    data property is created. The property name is the string value of the
    identifier, the property value is the value of the identifier, and the
    property is enumerable, writable, and configurable.
includes: [propertyHelper.js]
---*/

var attr = 23;
var obj;

obj = { attr };

assert.sameValue(obj.attr, 23);
verifyEnumerable(obj, 'attr');
verifyWritable(obj, 'attr');
verifyConfigurable(obj, 'attr');
