load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-evaldeclarationinstantiation
description: No variable collision with lexical binding in lower scope
info: |
    [...]
    5. If strict is false, then
    [...]
flags: [onlyStrict]
features: [let]
---*/

{
  let x;
  {
    eval('var x;');
  }
}
