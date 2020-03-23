load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

export { f as f2 } from './instn-iee-bndng-fun.js';

// Taken together, the following two assertions demonstrate that there is no
// entry in the environment record for ImportName:
assert.throws(ReferenceError, function() {
  f;
});
assert.sameValue(typeof f, 'undefined');

// Taken together, the following two assertions demonstrate that there is no
// entry in the environment record for ExportName:
assert.throws(ReferenceError, function() {
  f2;
});
assert.sameValue(typeof f2, 'undefined');
