load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.2.8.5
description: Function invocation in expression position of TemplateLiteral
info: >
    TemplateLiteral : TemplateHead Expression TemplateSpans

    1. Let head be the TV of TemplateHead as defined in 11.8.6.
    2. Let sub be the result of evaluating Expression.
    3. Let middle be ToString(sub).
---*/

function fn() { return 'result'; }

assert.sameValue(`foo ${fn()} bar`, 'foo result bar');