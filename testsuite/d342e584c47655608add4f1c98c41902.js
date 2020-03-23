load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-escape-string
es6id: B.2.1.1
description: Observable operations from string coercion
info: |
    1. Let string be ? ToString(string).
---*/

var log, obj;

log = '';
obj = {
  toString: function() {
    log += 'toString';
  },
  valueOf: function() {
    log += 'valueOf';
  }
};

escape(obj);

assert.sameValue(log, 'toString');

log = '';
obj = {
  toString: null,
  valueOf: function() {
    log += 'valueOf';
  }
};

escape(obj);

assert.sameValue(log, 'valueOf');

log = '';
obj = {
  toString: function() {
    log += 'toString';
    return {};
  },
  valueOf: function() {
    log += 'valueOf';
  }
};

escape(obj);

assert.sameValue(log, 'toStringvalueOf');
