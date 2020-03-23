load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 14.2
description: >
    ArrowParameters[Yield] :
      BindingIdentifier[?Yield]

    (12.1)
    BindingIdentifier[Yield] :
      Identifier[~Yield] yield

    Identifier :
      IdentifierName but not ReservedWord

    ReservedWord : FutureReservedWord

negative:
  phase: early
  type: SyntaxError
---*/
var af = enum => 1;
