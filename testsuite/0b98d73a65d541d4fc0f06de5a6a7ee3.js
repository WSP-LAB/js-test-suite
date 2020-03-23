load("924921a1ecafccfb4db6dd25ea7b14f2.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright 2016 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
esid: sec-intl.getcanonicallocales
description: Tests for existance and behavior of Intl.getCanonicalLocales
info: |
  8.2.1 Intl.getCanonicalLocales (locales)
  1. Let ll be ? CanonicalizeLocaleList(locales).
  2. Return CreateArrayFromList(ll).
includes: [compareArray.js]
---*/

var gCL = Intl.getCanonicalLocales;

function assertArray(l, r) {
  assert(compareArray(l, r), r);
}

assertArray(gCL(), []);

assertArray(gCL('ab-cd'), ['ab-CD']);

assertArray(gCL(['ab-cd']), ['ab-CD']);

assertArray(gCL(['ab-cd', 'FF']), ['ab-CD', 'ff']);

assertArray(gCL({'a': 0}), []);

assertArray(gCL({}), []);

assertArray(gCL(['ar-ma-u-ca-islamicc']), ['ar-MA-u-ca-islamicc']);

assertArray(gCL(['th-th-u-nu-thai']), ['th-TH-u-nu-thai']);
