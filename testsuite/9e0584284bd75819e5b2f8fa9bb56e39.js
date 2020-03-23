load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-reflect.construct
es6id: 26.1.2
description: Value when invoked via `Reflect.construct`
info: |
  [...]
  2. If newTarget is not present, let newTarget be target.
  [...]
  5. Return ? Construct(target, args, newTarget).
features: [Reflect]
---*/

var customNewTarget = function() {};
var newTarget = null;

function f() {
  newTarget = new.target;
}

Reflect.construct(f, []);

assert.sameValue(newTarget, f, 'NewTarget unspecified');

Reflect.construct(f, [], customNewTarget);

assert.sameValue(newTarget, customNewTarget, 'NewTarget explicitly defined');
