load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 14.5
description: >
    superclass setter "constructor" override
---*/
function Base() {}

Base.prototype = {
  set constructor(_) {
    $ERROR("`Base.prototype.constructor` is unreachable.");
  }
};

class C extends Base {}

new C();
