load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-proxy-object-internal-methods-and-internal-slots-setprototypeof-v
description: >
  Return abrupt from target.[[GetPrototypeOf]]()
info: |
  [[SetPrototypeOf]] (V)

  12. Let targetProto be ? target.[[GetPrototypeOf]]().
---*/

var target = new Proxy({}, {
  getPrototypeOf: function() {
    throw new Test262Error();
  }
});

Object.preventExtensions(target);

var proxy = new Proxy(target, {
  setPrototypeOf: function() {
    return true;
  }
});

assert.throws(Test262Error, function() {
  Object.setPrototypeOf(proxy, {});
});
