load("e9229e434835e44850f2abee613bc307.js");
load("6b63254b0839f56fc10760caf93c8b3c.js");
load("976e6b31b3e5e8cb8fd712a37c003825.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var locales = ['en-US', 'fr'];
var result = Intl.getCanonicalLocales(locales);
var len = result.length

// TODO(jshin): Remove the following when
// https://github.com/tc39/test262/issues/745 is resolved and
// test262 in v8 is updated.

assertEquals(Object.getPrototypeOf(result), Array.prototype);
assertEquals(result.constructor, Array);

for (var key in result) {
  var desc = Object.getOwnPropertyDescriptor(result, key);
  assertTrue(desc.writable);
  assertTrue(desc.configurable);
  assertTrue(desc.enumerable);
}

var desc = Object.getOwnPropertyDescriptor(result, 'length');
assertTrue(desc.writable);
assertEquals(result.push('de'), desc.value + 1);

load("ad44e9798916912c175677b559081daf.js");
