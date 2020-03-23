load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2016 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
esid: sec-intl.getcanonicallocales
description: Intl.getCanonicalLocales.length. 
info: |
  8.2.1 Intl.getCanonicalLocales (locales)
  1. Let ll be ? CanonicalizeLocaleList(locales).
  2. Return CreateArrayFromList(ll).
includes: [propertyHelper.js]
---*/

assert.sameValue(Intl.getCanonicalLocales.length, 1);

verifyNotEnumerable(Intl.getCanonicalLocales, "length");
verifyNotWritable(Intl.getCanonicalLocales, "length");
verifyConfigurable(Intl.getCanonicalLocales, "length");
