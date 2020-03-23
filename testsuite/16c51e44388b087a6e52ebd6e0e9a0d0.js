load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 19.5.6.1.1
description: >
  A new instance has the message property if created with a parameter
info: >
  19.5.6.1.1 NativeError ( message )

  ...
  4. If message is not undefined, then
    a. Let msg be ToString(message).
    b. Let msgDesc be the PropertyDescriptor{[[Value]]: msg, [[Writable]]: true,
    [[Enumerable]]: false, [[Configurable]]: true}.
    c. Let status be DefinePropertyOrThrow(O, "message", msgDesc).
  ...
includes: [propertyHelper.js]

---*/

class Err extends ReferenceError {}

Err.prototype.message = 'custom-reference-error';

var err1 = new Err('foo 42');
assert.sameValue(err1.message, 'foo 42');
assert(err1.hasOwnProperty('message'));

verifyWritable(err1, 'message');
verifyNotEnumerable(err1, 'message');
verifyConfigurable(err1, 'message');

var err2 = new Err();
assert.sameValue(err2.hasOwnProperty('message'), false);
assert.sameValue(err2.message, 'custom-reference-error');
