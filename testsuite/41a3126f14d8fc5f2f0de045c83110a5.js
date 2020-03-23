load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright 2016 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
esid: sec-intl.getcanonicallocales
description: Tests the getCanonicalLocales function for duplicate locales scenario.
info: |
  8.2.1 Intl.getCanonicalLocales (locales)
  1. Let ll be ? CanonicalizeLocaleList(locales).
  2. Return CreateArrayFromList(ll).
includes: [compareArray.js]
---*/

assert(compareArray(
  Intl.getCanonicalLocales(
    ['ab-cd', 'ff', 'de-rt', 'ab-Cd']), ['ab-CD', 'ff', 'de-RT']));

var locales = Intl.getCanonicalLocales(["en-US", "en-US"]);
assert(compareArray(locales, ['en-US']), 'en-US');
