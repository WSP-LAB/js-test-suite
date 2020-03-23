load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Requested modules that produce an early SyntaxError
esid: sec-moduledeclarationinstantiation
info: |
    [...]
    8. For each String required that is an element of
       module.[[RequestedModules]] do,
       [...]
       b. Let requiredModule be ? HostResolveImportedModule(module, required).
    [...]
negative:
  phase: early
  type: SyntaxError
flags: [module]
---*/

import './instn-resolve-err-syntax_FIXTURE.js';
