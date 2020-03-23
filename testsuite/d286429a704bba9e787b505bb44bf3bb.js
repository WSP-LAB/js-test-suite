load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("f22a0d60dd8c199d50eb1a64119fffb7.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Requested modules are evaluated exactly once
esid: sec-moduleevaluation
info: |
    [...]
    4. If module.[[Evaluated]] is true, return undefined.
    5. Set module.[[Evaluated]] to true.
    6. For each String required that is an element of module.[[RequestedModules]] do,
       a. Let requiredModule be ? HostResolveImportedModule(module, required).
       b. Perform ? requiredModule.ModuleEvaluation().
    [...]
includes: [fnGlobalObject.js]
flags: [module]
---*/

import {} from './eval-rqstd-once_FIXTURE.js';
import './eval-rqstd-once_FIXTURE.js';
import * as ns1 from './eval-rqstd-once_FIXTURE.js';
import dflt1 from './eval-rqstd-once_FIXTURE.js';
export {} from './eval-rqstd-once_FIXTURE.js';
import dflt2, {} from './eval-rqstd-once_FIXTURE.js';
export * from './eval-rqstd-once_FIXTURE.js';
import dflt3, * as ns from './eval-rqstd-once_FIXTURE.js';
export default null;

var global = fnGlobalObject();

assert.sameValue(global.test262, 262, 'global property was defined');
