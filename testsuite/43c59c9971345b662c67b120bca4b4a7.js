load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: B.3.1
description: Function name is not assigned based on the property name
info: >
    [...]
    6. If propKey is the String value "__proto__" and if
       IsComputedPropertyKey(propKey) is false, then
       a. If Type(propValue) is either Object or Null, then
          i. Return object.[[SetPrototypeOf]](propValue).
       b. Return NormalCompletion(empty).
    7. If IsAnonymousFunctionDefinition(AssignmentExpression) is true, then
       a. Let hasNameProperty be HasOwnProperty(propValue, "name").
       b. ReturnIfAbrupt(hasNameProperty).
       c. If hasNameProperty is false, perform SetFunctionName(propValue, propKey).
includes: [propertyHelper.js]
---*/

var o;

o = {
  __proto__: function() {}
};

assert(o.__proto__.name !== '__proto__');
