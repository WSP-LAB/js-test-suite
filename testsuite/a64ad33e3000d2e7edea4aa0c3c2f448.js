load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 14.2.1
description: >
    ArrowParameters[Yield] :
      ...
      CoverParenthesizedExpressionAndArrowParameterList[?Yield]

    12.14.5
    ---*/
var af = ({x = 1}) => x;

assert.sameValue(typeof af, "function");
assert.sameValue(af({}), 1);
assert.sameValue(af({x: 2}), 2);
