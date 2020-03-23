load("924921a1ecafccfb4db6dd25ea7b14f2.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright 2016 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
esid: sec-intl.getcanonicallocales
description: Tests that the value returned by getCanonicalLocales is an Array.
info: |
  8.2.1 Intl.getCanonicalLocales (locales)
  1. Let ll be ? CanonicalizeLocaleList(locales).
  2. Return CreateArrayFromList(ll).
includes: [compareArray.js]
---*/

var locales = ['en-US'];
var result = Intl.getCanonicalLocales(['en-US']);

assert.notSameValue(result, locales, "result is a new array instance");
assert.sameValue(result.length, 1, "result.length");
assert(result.hasOwnProperty("0"), "result an own property `0`");
assert.sameValue(result[0], "en-US", "result[0]");
