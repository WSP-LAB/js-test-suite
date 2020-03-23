load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright 2016 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
esid: sec-intl.getcanonicallocales
description: Tests for scenario where locales is not a string
info: |
  8.2.1 Intl.getCanonicalLocales (locales)
  1. Let ll be ? CanonicalizeLocaleList(locales).
  2. Return CreateArrayFromList(ll).
includes: [compareArray.js]
features: [Symbol]
---*/

var gCL = Intl.getCanonicalLocales;

function assertArray(l, r) {
  assert(compareArray(l, r), r);
}

assertArray(gCL(), []);
assertArray(gCL(false), []);
assertArray(gCL(true), []);
assertArray(gCL(Symbol("foo")), []);
assertArray(gCL(NaN), []);
assertArray(gCL(1), []);

Number.prototype[0] = "en-US";
Number.prototype.length = 1;
assertArray(gCL(NaN), ["en-US"]);
