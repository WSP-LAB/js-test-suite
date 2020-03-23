load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: The `export` declaration may not appear within a ScriptBody
esid: sec-scripts
negative:
  phase: early
  type: SyntaxError
info: |
     A.5 Scripts and Modules

     Script:
         ScriptBodyopt

     ScriptBody:
         StatementList
---*/

export default null;
